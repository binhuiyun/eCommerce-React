const Cart = require("../models/Cart");

const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ owner: req.user._id }).populate({
      path: "items.product",
      model: "Product",
    });
    res.json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const addToCart = async (req, res) => {
    console.log(req.body);
  try {
    const cart = await Cart.findOne({ owner: req.user._id });
    const product = req.body.product;
    const quantity = req.body.quantity;
    const item = cart.items.find((i) => i.product == product);
    if (item) {
      item.quantity += quantity;
    } else {
      cart.items.push({ product, quantity });
    }
    await cart.save();
    res.json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const removeFromCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ owner: req.user._id });
    const product = req.body.product;
    const item = cart.items.find((i) => i.product == product);
    if (item) {
      item.quantity -= 1;
      if (item.quantity <= 0) {
        cart.items.remove(item);
      }
    }
    await cart.save();
    res.json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { getCart, addToCart, removeFromCart };
