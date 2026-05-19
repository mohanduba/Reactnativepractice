const express = require("express");
const router = express.Router();

// ✅ FIX
const userCtrl = require("./userController");
const auth = require("./authMiddleware");

const multer = require("multer");

// Multer config
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// APIs
router.post("/register", upload.single("profilePic"), userCtrl.register);
router.post("/login", userCtrl.login);
router.get("/", auth, userCtrl.getUsers);
router.delete("/:id", auth, userCtrl.deleteUser);
 
module.exports = router;