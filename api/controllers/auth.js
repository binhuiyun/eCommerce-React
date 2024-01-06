const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const bcryptSalt = bcrypt.genSaltSync(10);
const Users = require("../models/User");
const generateResetToken = require("../middlewares/AuthToken");
const generateLoginToken = require("../middlewares/AuthToken");

require("dotenv").config();

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });
    if (user) {
      const passwordMatch = await bcrypt.compareSync(password, user.password);
      if (passwordMatch) {
        const loginToken = await generateLoginToken(user);
        console.log("Logged In");
        const { password, ...others } = user._doc;
        res
          .cookie("login_token", loginToken, {
            httpOnly: true,
          })
          .status(200)
          .json({others, loginToken});
      } else res.status(422).json("Wrong password");
    } else res.status(422).json("User not found");
  } catch (err) {
    next(err);
  }
};

const signUp = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    
    const user = await Users.create({
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
      token: "",
      cart: null,
    });

    console.log(user);
    res.json(user);
  } catch (err) {
    res.status(422).json(err);
  }
};

const forgotPassword = async (req, res, next) => {
  const { email } = req.body;
  const user = await Users.findOne({ email });

  if (user) {
    const resetToken = await generateResetToken(user);
    user.resetToken = resetToken;
    await Users.findOneAndUpdate({ email }, user);
    console.log("Reset link", user);
  } else {
    console.log("User not found");
    res.json("User not found");
  }
};

module.exports = { login, signUp, forgotPassword };
