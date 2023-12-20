const { model } = require('mongoose');
const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
    };

const updateProduct = async (req, res) => {
    try{
        const product = await Product.findById(req.params?.id);
        product.name = req.body.name ?? product.name;
        product.description = req.body.description ?? product.description;
        product.price = req.body.price ?? product.price;
        product.category = req.body.category ?? product.category;
        product.image = req.body.image ?? product.image;
        product.stockQuantity = req.body.stockQuantity ?? product.stockQuantity;
        await product.save();
        res.status(200).json(product);
    }catch(error){
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};


model.exports = {getAllProducts, createProduct, updateProduct};
