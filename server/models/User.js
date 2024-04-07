const mongoose = require("mongoose");
const { Schema } = mongoose;
const Cart = require("../models/Cart");

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
  },
  password: String,

  role: {
    type: String,
    default: "customer",
  },

  // cart: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Cart",
  // },
});

// userSchema.pre('save', async function(next) {
//   try {
//     // If the user already has a cart, do nothing
//     if (this.cart) {
//       return next();
//     }
    
//     // Create a new cart for the user
   
//     const cart = new Cart({ owner: this._id, items: [] });
//     await cart.save();
    
//     // Set the user's cart reference
//     this.cart = cart._id;
    
//     next();
//   } catch (error) {
//     next(error);
//   }
// });


userSchema.methods.comparePassword = function (candidatePassword) {
  const isMatch = candidatePassword === this.password;
  return isMatch;
};
const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
