const db = require("../models");
const jwt = require("jsonwebtoken");


exports.signin = async function (req, res, next) {
  console.log("signin:", req.body.email);
  try {
    // finding a user
    const user = await db.User.findOne({
      email: req.body.email,
    });
    const { id, email } = user;

    // checking if their password matches what was sent to the server
    const isMatch = await user.comparePassword(req.body.password);

    // if it all matches, log them in
    if (isMatch) {
      console.log("isMatch");
      let token = jwt.sign(
        {
          id,
          email,
        },
        process.env.JWT_SECRET_KEY
      );
      return res.status(200).json({
        id,
        email,
        token,
      });
    } else {
      console.log("not isMatch");
      return next({
        status: 400,
        message: "Invalid Email/Password.",
      });
    }
  } catch (err) {
    return next({
      status: 400,
      message: "Invalid Email/Password.",
    });
  }
};

exports.signup = async function (req, res, next) {
  try {
    let user = await db.User.create(req.body);
    let { id, email } = user;
    let token = await jwt.sign(
      {
        id,
        email,
      },
      process.env.JWT_SECRET_KEY
    );

    return res.status(200).json({
      id,
      email,
      token,
    });
  } catch (err) {
    // see what kind of error
    // if it is a certain error
    // responde with username/email already taken
    // otherwise just send back with 400

    // if there is already a user with that email
    if (err.code === 11000) {
      err.message = "Sorry, that username and/or email is taken";
    }

    return next({
      status: 400,
      message: err.message,
    });
  }
};
