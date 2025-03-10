import jwt from "jsonwebtoken";
import User from "../models/User.js";
import dotenv from "dotenv";
import process from "node:process"; // ✅ Import process explicitly

dotenv.config();

const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      res.status(401).json({ msg: "Not authorized, token failed" });
    }
  }

  if (!token) {
    res.status(401).json({ msg: "Not authorized, no token" });
  }
};

export default protect;

