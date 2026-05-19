// ✅ FIX
const db = require("./db");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fs = require("fs");

// Register
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hash = await bcrypt.hash(password, 10);

    const profilePic = req.file ? req.file.path : null;

    const query =
      "INSERT INTO users (name, email, password, profilePic) VALUES (?, ?, ?, ?)";

    db.query(query, [name, email, hash, profilePic], (err, result) => {
      if (err) return res.status(500).send(err.message);

      res.send("User Registered");
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Login
exports.login = (req, res) => {
  const { email, password } = req.body;

  const query = "SELECT * FROM users WHERE email = ?";

  db.query(query, [email], async (err, results) => {
    if (err) return res.status(500).send(err.message);

    if (results.length === 0) return res.send("User not found");

    const user = results[0];

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.send("Wrong password");

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

    res.json({ token });
  });
};

// Get Users
exports.getUsers = (req, res) => {
  db.query("SELECT id, name, email, profilePic FROM users", (err, results) => {
    if (err) return res.status(500).send(err.message);

    res.json(results);
  });
};

// Delete User
exports.deleteUser = (req, res) => {
  const userId = req.params.id;

  // Get profilePic first
  db.query("SELECT profilePic FROM users WHERE id = ?", [userId], (err, result) => {
    if (result[0]?.profilePic) {
      fs.unlink(result[0].profilePic, () => {});
    }

    db.query("DELETE FROM users WHERE id = ?", [userId], (err) => {
      if (err) return res.status(500).send(err.message);

      res.send("User deleted");
    });
  });
};