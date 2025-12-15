import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import jwt from "jsonwebtoken";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();

/* ---------- MIDDLEWARE ---------- */
app.use(express.json());

const allowedOrigins = [
  "http://localhost:5173",
  "https://iiai.org.in",
];

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// handle preflight
app.options("*", cors());

/* ---------- DATABASE ---------- */
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(console.error);

/* ---------- AUTH ---------- */
export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    return res.status(403).json({ message: "Invalid token" });
  }
};

/* ---------- ROUTES ---------- */
app.use("/api/auth", authRoutes);

app.get("/api/auth/me", verifyToken, (req, res) => {
  res.json({ user: req.user });
});

/* ---------- SERVER ---------- */
app.listen(process.env.PORT, () => {
  console.log("Server running on", process.env.PORT);
});
