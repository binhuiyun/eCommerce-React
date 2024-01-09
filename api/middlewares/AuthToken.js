const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../util/secret");
const Users = require("../models/User");

const generateLoginToken = async (user) => {
  const token = jwt.sign(
    {
      email: user.email,
      id: user._id,
    },
    JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );

  return token;
};
module.exports = generateLoginToken;

const generateResetToken = async (user) => {
  const token = jwt.sign(
    {
      email: user.email,
      id: user._id,
    },
    JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );

  return token;
};

module.exports = generateResetToken;

const verifyToken = async (token) => {
  const decoded = jwt.verify(token, JWT_SECRET, async (err, decoded) => {
    if (err) {
      console.log("Error verifying token", err);
      return false;
    } else {
      try {
        const user = await Users.findOne({ email: decoded.email });
        if (!user) {
          console.log("User not found");
          return false;
        }
        return { email: decoded.email, id: decoded._id };
      } catch (err) {
        return false;
      }
    }
  });
};
