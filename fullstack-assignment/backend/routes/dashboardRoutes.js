const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

// Middleware to check authentication
const authenticate = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.status(403).json({ message: "User not logged in" });

    try {
        const decoded = jwt.verify(token.split(" ")[1], "secret");
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
};

// Dashboard API (Protected)
router.get("/dashboard", authenticate, (req, res) => {
    res.json({ message: "Welcome to your dashboard!", userId: req.user.id });
});

// Map View API (Protected)
router.get("/map", authenticate, (req, res) => {
    res.json({ message: "Here is the map view", location: "India" });
});

module.exports = router;


