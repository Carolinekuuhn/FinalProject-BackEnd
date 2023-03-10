const router = require("express").Router();
const mongoose = require("mongoose");

const User = require("../models/User.model");

// User routes

// Get all users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all users
router.get("/users/:id", async (req, res) => {
  const {id} = req.params
  try {
    const users = await User.findById(id);
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
