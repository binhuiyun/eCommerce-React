const express = require("express");
const { login, signUp, forgotPassword } = require("../controllers/auth");

const router = express.Router();

router.post("/login", login);
router.post("/signup", signUp);
router.post("/forget-password", forgotPassword);

module.exports = router;
