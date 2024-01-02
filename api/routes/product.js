const express = require("express");
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
} = require("../controllers/product");

const router = express.Router();

router.get("/products", getAllProducts);
router.get("/product/:id", getProductById);
router.post("/products", createProduct);
router.put("/products/:id", updateProduct);

module.exports = router;
