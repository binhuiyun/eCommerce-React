const express = require("express");
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  getSearchProductResults,
} = require("../controllers/product");

const router = express.Router();

router.get("/products", getAllProducts);
router.get("/product/:id", getProductById);
router.get("/search/:searchKey", getSearchProductResults);
router.post("/product", createProduct);
router.put("/product/:id", updateProduct);

module.exports = router;
