const Cart = require("../models/Cart");

const getCartByUid= async (req, res) => {
  const userId = req.params.id;
  console.log("getCart", userId, req.params);
  
  try {
    const cart = await Cart.findOne({ owner: userId }).populate({
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
  console.log("addToCart", req.body);
  try {
    const userId = req.body.userId;
    let cart = await Cart.findOne({ owner: userId });
    if (!cart) {
      cart = new Cart({ owner: userId, items: [] });
   
    } 
      const product = req.body.product;
      // const productStockQuantity = req.body.product.productQuantity;
      // const itemIndex = cart.items.findIndex(item => item.product.equals(product._id));
      // if (itemIndex !== -1) {
      //   // If the item exists, update its quantity
      //   cart.items[itemIndex].quantity += 1;
      const item = cart.items.find((i) => i.product._id == product._id);
      if (item) {
        item.quantity += 1;
      } else {
        // If the item doesn't exist, add it as a new item
        cart.items.push({ product,quantity: 1 });
      }
  
      // Save the updated cart
      await cart.save();
      return cart;

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const removeFromCart = async (req, res) => {
  console.log("removeFromCart", req.body.product);
  try {
    const userId = req.body.userId;
    const cart = await Cart.findOne({ owner: userId });
    const product = req.body.product;
    const item = cart.items.find((i) => i.product._id == product._id);
    if (item) {
      console.log("found item", item);
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

const removeOneProductFromCart = async (req, res) => {
  try {
    const userId = req.body.userID;
    const cart = await Cart.findOne({ owner: userId });
    const product = req.body.product.productID;
    const item = cart.items.find((i) => i.product == product);
    if (item) {
      cart.items.remove(item);
    }
    await cart.save();
    res.json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getCartByUid,
  addToCart,
  removeFromCart,
  removeOneProductFromCart,
};
