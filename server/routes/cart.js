const express = require("express");
const {
  getCartByUid,
  addToCart,
  removeFromCart,
  removeOneProductFromCart,
} = require("../controllers/cart");
const router = express.Router();
router.get("/:id", getCartByUid);
router.post("/add", addToCart);
router.post("/remove", removeFromCart);
router.post("/removeOne", removeOneProductFromCart);
module.exports = router;
