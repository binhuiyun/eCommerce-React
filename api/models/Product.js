const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
      },
      description: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
        min: 0,
      },
      category: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      stockQuantity: {
        type: Number,
        required: true,
        min: 0,
      },
    });
    
    // Create a Product model based on the schema
    const Product = mongoose.model('Product', productSchema);
    
    module.exports = Product;