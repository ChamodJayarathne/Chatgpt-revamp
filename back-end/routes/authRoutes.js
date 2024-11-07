

const express = require("express");
const passport = require("passport");
const router = express.Router();
const jwt = require("jsonwebtoken");

// Google OAuth routes
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    try {
      // Create JWT token
      const token = jwt.sign({ user: req.user }, process.env.JWT_SECRET, {
        expiresIn: "24h",
      });

      // Redirect to frontend with token
      res.redirect(`http://localhost:5173/auth/google/callback?token=${token}`);
    } catch (error) {
      res.redirect(
        `http://localhost:5173/login?error=${encodeURIComponent(
          "Authentication failed"
        )}`
      );
    }
  }
);

// Test route to verify setup
router.get("/test", (req, res) => {
  res.json({ message: "Auth routes working" });
});

module.exports = router;
