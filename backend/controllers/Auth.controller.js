import express from 'express'
import jwt from 'jsonwebtoken';
import model from '../schema/userschema.js';
import bcrypt from "bcrypt";


export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Basic validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Check if user already exists
    const existingUser = await model.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists." });
    }

    // Hash password (and optionally username if needed)
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // If you also want to hash username (not typical, but possible)
    // const hashedName = await bcrypt.hash(name, saltRounds);

    // Create and save new user
    const newUser = new model({
      name, // or hashedName if you decided to hash it
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
      message: "User registered successfully!",
      user: {
        name: newUser.name,
        email: newUser.email,
        // Don’t return password or hash
      },
    });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};


export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. Find the user by email
    const user = await model.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // 2. Compare provided password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // 3. Generate JWT token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // 4. Return success with token and user info
    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("Signin error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};