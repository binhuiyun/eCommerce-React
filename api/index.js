const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const bcryptSalt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");
const Users = require("./models/User");
const Product = require("./models/Product");
const jwtSecret = "dsadsadS43tr4rwfdg";
const generateResetToken = require("./middlewares/AuthToken");
const generateLoginToken = require("./middlewares/AuthToken");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
const userRouter = require("./routes/user");
mongoose.connect(process.env.MONGODB_URL);
app.use(cookieParser());
app.get("/api/test", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/user", userRouter);
app.use("/api/auth", require("./routes/auth"));
app.use("/api/product", require("./routes/product"));

/** 
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Users.create({
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(user);
  } catch (err) {
    res.status(422).json(err);
  }
});

app.post("/forgot-password", async (req, res) => {
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
});
*/

// app.get("/products", async (req, res) => {
//   const { token } = req.cookies;
// });

app.listen(4000, () => console.log("Server running on port 4000"));
