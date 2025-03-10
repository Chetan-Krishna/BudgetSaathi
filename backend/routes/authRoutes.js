// const express = require("express");
// const router = express.Router();
// const User = require("../models/User");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// router.post("/login", async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         // Check if email or password is missing
//         if (!email || !password) {
//             return res.status(400).json({ msg: "Please provide both email and password" });
//         }

//         // Find user by email
//         const user = await User.findOne({ email }).exec();
//         if (!user) {
//             return res.status(400).json({ msg: "User not found" });
//         }

//         // Compare passwords
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(400).json({ msg: "Invalid password" });
//         }

//         // Check if JWT secret exists
//         if (!process.env.JWT_SECRET) {
//             throw new Error("JWT secret not defined");
//         }

//         // Generate JWT token
//         const token = jwt.sign(
//             { id: user._id },
//             process.env.JWT_SECRET,
//             { expiresIn: "1h" }
//         );

//         // Return token and user data
//         res.json({
//             status: "success",
//             token,
//             user: {
//                 id: user._id,
//                 name: user.name,
//                 email: user.email
//             }
//         });

//     } catch (err) {
//         console.error("Login error:", err);
//         res.status(500).json({ 
//             msg: err.message,
//             status: "error"
//         });
//     }
// });

// module.exports = router;

import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;

