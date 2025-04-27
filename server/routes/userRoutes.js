const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { protect } = require("../middleware/authMiddleware");
const Cart = require("../models/Cart");

const router = express.Router();

// Tạo JWT và lưu vào cookie
const sendToken = (user, res) => {
  const payload = { user: { id: user._id, role: user.role } };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "40h" });

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 40 * 60 * 60 * 1000, // 40h
  });

  res.status(200).json({
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      address: user.address,
      role: user.role,
    },
  });
};

// @route   POST /api/users/register
// @desc    Register a new user
// @access  Public
router.post("/register", async (req, res) => {
  const { name, email, password, addressString } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });

    const addressParts =
      addressString?.split(",").map((part) => part.trim()) || [];
    const addressObj = {
      street: addressParts[0] || "",
      city: addressParts[1] || "",
      state: addressParts[2] || "",
      country: addressParts[3] || "",
    };

    // Kiểm tra email có cấu trúc admin đặc biệt
    // Ví dụ: email có đuôi là @admin.com hoặc bắt đầu bằng admin_
    const isAdminEmail =
      email.endsWith("@admin.com") || email.startsWith("admin_");
    const role = isAdminEmail ? "admin" : "customer";

    user = new User({
      name,
      email,
      password,
      address: [addressObj],
      role,
    });
    
    // Tạo giỏ hàng trống cho người dùng mới
    const newCart = new Cart({
      userId: user._id,
      items: [], // Giỏ hàng trống
      totalPrice: 0, // Giá trị giỏ hàng ban đầu là 0
    });
    await newCart.save();
    await user.save();
    sendToken(user, res);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// @route   POST /api/users/login
// @desc    Login user and get token in cookie
// @access  Public
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user)
      return res
        .status(400)
        .json({ message: "Email or password is not valid" });

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ message: "Email or password is not valid" });
    }

    sendToken(user, res);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// @route   GET /api/users/profile
// @desc    Get current user profile
// @access  Private
router.get("/profile", protect, async (req, res) => {
  res.json(req.user);
});

// @route   PUT /api/users/update
// @desc    Update profile
// @access  Private
router.put("/update", protect, async (req, res) => {
  const { name, email, password, addressString, phoneNumber } = req.body;

  try {
    let user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (name) user.name = name;
    if (email && email !== user.email)
      return res.status(400).json({ message: "Email cannot be changed" });

    if (password) {
      if (password.length < 8) {
        return res
          .status(400)
          .json({ message: "Password must be at least 8 characters long" });
      }
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }

    if (phoneNumber) user.phoneNumber = phoneNumber;

    if (addressString) {
      const addressParts = addressString.split(",").map((part) => part.trim());
      if (
        addressParts.length !== 4 ||
        !addressParts.every((part) => part.trim() !== "")
      ) {
        return res.status(400).json({
          message: "Address format should be: street, city, state, country",
        });
      }
      user.address = [
        {
          street: addressParts[0] || "",
          city: addressParts[1] || "",
          state: addressParts[2] || "",
          country: addressParts[3] || "",
        },
      ];
    }

    await user.save();

    res.json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        address: user.address,
        phoneNumber: user.phoneNumber,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// @route   DELETE /api/users/delete
// @desc    Delete user account
// @access  Private
router.delete("/delete", protect, async (req, res) => {
  const { password } = req.body;

  try {
    // Tìm user hiện tại
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Xác thực mật khẩu trước khi xóa
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Password is incorrect" });
    }

    // Xóa user
    await user.deleteOne();

    // Xóa cookie đăng nhập
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    res.json({ message: "User account deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
});

// @route POST /api/users/logout
// @desc Log out the user and clear the cookie
// @access Private
router.post("/logout", protect, (req, res) => {
  // Xóa cookie chứa token
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Chỉ xóa cookie ở môi trường production nếu có HTTPS
    sameSite: "strict", // Cài đặt SameSite để chống CSRF
  });

  // Trả về thông báo
  res.status(200).json({ message: "Logged out successfully" });
});

module.exports = router;
