const express = require("express");
const addfn = require("./Add");
const data = require("./data.json");
const db = require("./db"); // ✅ DB connection

const app = express();

app.use(express.json());

console.log("Hello node");


// ================== POST APIs ==================

// ➕ ADD (POST + STORE IN DB)
app.post("/add", (req, res) => {
  const { a, b } = req.body;

  if (a == null || b == null) {
    return res.status(400).json({ error: "a and b are required" });
  }

  const result = addfn.add(a, b);

  const query = `
    INSERT INTO calculations (a, b, result, operation)
    VALUES (?, ?, ?, ?)
  `;

  db.query(query, [a, b, result, "add"], (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json({
      message: "Addition stored in DB ✅",
      result: result,
    });
  });
});


// ➖ SUB (POST + STORE IN DB)
app.post("/sub", (req, res) => {
  const { a, b } = req.body;

  if (a == null || b == null) {
    return res.status(400).json({ error: "a and b are required" });
  }

  const result = addfn.sub(a, b);

  const query = `
    INSERT INTO calculations (a, b, result, operation)
    VALUES (?, ?, ?, ?)
  `;

  db.query(query, [a, b, result, "sub"], (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json({
      message: "Subtraction stored in DB ✅",
      result: result,
    });
  });
});


// 📂 STATE (POST)
app.post("/state", (req, res) => {
  res.json({
    state: data.address.state,
  });
});


// ================== GET APIs ==================

// ➕ ADD (GET - NO DB SAVE)
app.get("/add", (req, res) => {
  const { a, b } = req.query;

  const result = addfn.add(Number(a), Number(b));

  res.json({
    operation: "addition",
    result: result,
  });
});


// ➖ SUB (GET - NO DB SAVE)
app.get("/sub", (req, res) => {
  const { a, b } = req.query;

  const result = addfn.sub(Number(a), Number(b));

  res.json({
    operation: "subtraction",
    result: result,
  });
});


// 📂 STATE (GET)
app.get("/state", (req, res) => {
  res.json({
    state: data.address.state,
  });
});


// 🗄️ GET ALL CALCULATIONS FROM DB
app.get("/calculations", (req, res) => {
  const query = "SELECT * FROM calculations ORDER BY id DESC";

  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json(results);
  });
});


// ❌ DELETE CALCULATION
app.delete("/calculations/:id", (req, res) => {
  const { id } = req.params;

  const query = "DELETE FROM calculations WHERE id = ?";

  db.query(query, [id], (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json({ message: "Deleted successfully ✅" });
  });
});


// ✏️ UPDATE CALCULATION
app.put("/calculations/:id", (req, res) => {
  const { id } = req.params;
  const { a, b } = req.body;

  // Step 1: Get operation from DB
  const getQuery = "SELECT operation FROM calculations WHERE id = ?";

  db.query(getQuery, [id], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (rows.length === 0) {
      return res.status(404).json({ error: "Record not found" });
    }

    const operation = rows[0].operation;

    // Step 2: Decide logic
    let result;

    if (operation === "add") {
      result = addfn.add(a, b);
    } else if (operation === "sub") {
      result = addfn.sub(a, b);
    } else {
      return res.status(400).json({ error: "Invalid operation" });
    }

    // Step 3: Update DB
    const updateQuery = `
      UPDATE calculations 
      SET a = ?, b = ?, result = ?
      WHERE id = ?
    `;

    db.query(updateQuery, [a, b, result, id], (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      res.json({
        message: "Updated successfully ✅",
        operation,
        result,
      });
    });
  });
});

//dummy post api

app.post("/users", (req, res) => {
  const { name, email, number } = req.body;

  // ✅ Validation
  if (!name || !email || !number) {
    return res.status(400).json({
      error: "All fields are required",
    });
  }

  const query = `
    INSERT INTO usersdata (name, email, number)
    VALUES (?, ?, ?)
  `;

  db.query(query, [name, email, number], (err, result) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
      });
    }

    res.json({
      message: "User saved successfully ✅",
      data: {
        id: result.insertId,
        name,
        email,
        number,
      },
    });
  });
});


// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000 🚀");
});