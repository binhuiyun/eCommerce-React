require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;
const GPT_SECRET = process.env.GPT_SECRET;
module.exports = { JWT_SECRET, GPT_SECRET };
