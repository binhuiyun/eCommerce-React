const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
  },
  password: String,
  token: {
    type: String,
    default: "",
  },
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;