require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const app = express();
const Users = require("./models/User");

app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

mongoose.connect(process.env.MONGODB_URL);

app.get("/", (req, res) => {
  res.json("Hello World!");
});

app.post("/signup", (req, res) => {
  const { email, password } = req.body;
  Users.create({ email, password });
  res.json({ email, password });
});

app.listen(4000, () => console.log("Server running on port 4000"));
