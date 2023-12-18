const express = require("express");
const {
    getAllProducts,
    createProduct,
    updateProduct,
    } = require("../controllers/product");

const router = express.Router();

router.get("/products", getAllProducts);
router.post("/products", createProduct);
router.put("/products/:id", updateProduct);

module.exports = router;