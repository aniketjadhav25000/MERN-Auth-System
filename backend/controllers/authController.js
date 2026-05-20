const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const generateToken = (userId) => {
  return jwt.sign(
    { id: userId },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || "7d" }
  );
};

const formatUser = (user) => {
  return {
    _id: user._id,
    name: user.name,
    dob: user.dob,
    email: user.email,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt
  };
};

exports.registerUser = async (req, res) => {
  try {
    const { name, dob, email, password } = req.body;

    if (!name || !dob || !email || !password) {
      return res.status(400).json({
        message: "All fields are required: name, dob, email, password"
      });
    }

    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists with this email"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      dob,
      email: email.toLowerCase(),
      password: hashedPassword
    });

    const token = generateToken(user._id);

    return res.status(201).json({
      message: "Registration successful",
      token,
      user: formatUser(user)
    });
  } catch (error) {
    console.error("Register error:", error);
    return res.status(500).json({
      message: "Server error during registration"
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required"
      });
    }

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password"
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid email or password"
      });
    }

    const token = generateToken(user._id);

    return res.status(200).json({
      message: "Login successful",
      token,
      user: formatUser(user)
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      message: "Server error during login"
    });
  }
};

exports.getProtectedData = async (req, res) => {
  try {
    return res.status(200).json({
      message: "Protected route accessed successfully",
      user: req.user
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error"
    });
  }
};