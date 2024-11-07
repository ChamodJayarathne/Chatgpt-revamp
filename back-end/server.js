const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/connectDB.js");
const userRoutes = require("./routes/userRoutes.js");
const passport = require("passport");
const session = require("express-session");
const authRoutes = require("./routes/authRoutes.js");
require('./config/passport.config');

const app = express();

// Middleware

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/user", userRoutes);

// Middleware setup
app.use(express.json());

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,

  }));


// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Use the routes
app.use("/api", authRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
