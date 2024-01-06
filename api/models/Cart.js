const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectID, ref: "User" },

  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        default: 0,
      },
    },
  ],
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
