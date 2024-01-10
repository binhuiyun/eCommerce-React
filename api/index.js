const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const bcryptSalt = bcrypt.genSaltSync(10);
const axios = require("axios");
const { default: mongoose } = require("mongoose");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const cartRouter = require("./routes/cart");
const { GPT_SECRET } = require("./util/secret");

mongoose.connect(process.env.MONGODB_URL);
app.use(cookieParser());
app.get("/api/test", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);

axios.interceptors.request.use((request) => {
  request.maxContentLength = Infinity;
  request.maxBodyLength = Infinity;
  return request;
});

app.post("/api/generate-response", async (req, res) => {
  try {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://api.openai.com/v1/chat/completions",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GPT_SECRET}`,
      },
      data: req.body.data,
    };
    console.log(config);
    const response = await axios.request(config);
    res.json(response.data);
  } catch (error) {
    console.error("Error generating response:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/api/generate-image", async (req, res) => {
  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://api.openai.com/v1/dalle3/generate",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${GPT_SECRET}`,
    },
    data: req.body.data,
  };
  const response = await axios.request(config);
  res.json(response.data);
});

app.listen(4000, () => console.log("Server running on port 4000"));
