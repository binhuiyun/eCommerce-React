const { parse } = require("dotenv");
const Product = require("../models/Product");

const getAllProducts = async (req, res) => { 
  try {
    const products = await Product.find().sort({ createdAt: -1 });

    res.json(products);
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params?.id);
    product.name = req.body.name ?? product.name;
    product.description = req.body.description ?? product.description;
    product.price = req.body.price ?? product.price;
    product.category = req.body.category ?? product.category;
    product.image = req.body.image ?? product.image;
    product.stockQuantity = req.body.stockQuantity ?? product.stockQuantity;
    await product.save();
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getSearchProductResults = async (req, res) => {
  try {
    const searchKey = req.params.searchKey;
    const products = await Product.find({
      name: { $regex: searchKey, $options: "i" },
    });
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  getSearchProductResults,
};
