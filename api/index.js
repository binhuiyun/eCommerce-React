const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const { default: mongoose } = require("mongoose");
const Users = require("./models/User");
const bcryptSalt = bcrypt.genSaltSync(10);
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

mongoose.connect(process.env.MONGODB_URL);

app.get("/", (req, res) => {
  res.json("Hello World!");
});

app.post("/", async (req, res) => {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });
    if (user) 
        res.json("User Find");
    else
        res.json("User not found");
  });

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

app.listen(4000, () => console.log("Server running on port 4000"));
