const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const cartRouter = require("./routes/cart");
const GPT_SECRET = process.env.GPT_SECRET;
const errorHandler = require("./controllers/error");


app.use("/api/auth", authRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use(errorHandler);
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
