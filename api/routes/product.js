const express = require("express");
const router = express.Router();

router.post("/product", jwt, signUp);
router.post("/product/details", jwt, signUp);
