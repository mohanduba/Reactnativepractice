const express = require("express");
const cors = require("cors");

// ✅ FIX
const userRoutes = require("./userRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

module.exports = app;