const express = require("express");
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  getSearchProductResults,
} = require("../controllers/product");

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.get("/search/:searchKey", getSearchProductResults);
router.post("/", createProduct);
router.put("/:id", updateProduct);

module.exports = router;
