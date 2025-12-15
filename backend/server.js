import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import model from './schema/userschema.js'; 
import cors from 'cors';
import jwt from 'jsonwebtoken';
import authRoutes from './routes/authRoutes.js'

const app = express();
dotenv.config();

app.use(express.json());


const allowedOrigins = [
  "http://localhost:5173",
  "https://www.iiai.org.in"
];

app.use(cors({
  origin: (origin, callback) => {
    // allow requests with no origin (Postman, mobile apps)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));



try {
    mongoose.connect(process.env.MONGODB_URI)
    console.log("MongoDB connected!!")
}
catch (error) {
    console.error(error)
}



export const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // "Bearer <token>"

  if (!token) return res.status(401).json({ message: 'Access Denied. No token.' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // Add user info to request
    next(); // Go to the actual route
  } catch (err) {
    res.status(403).json({ message: 'Invalid Token' });
  }
};

app.use('/api/auth',authRoutes);


app.get('/dashboard', verifyToken, (req, res) => {
  res.send("Dashboard");
});

// Check if token is valid (used by frontend auto-login)
app.get("/api/auth/me", verifyToken, (req, res) => {
  res.json({
    message: "Token valid",
    user: req.user,
  });
});



app.listen(process.env.PORT, () => {
    console.log("App is running on", process.env.PORT);
})