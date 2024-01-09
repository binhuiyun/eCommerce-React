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

let data = JSON.stringify({
  model: "gpt-3.5-turbo",
  messages: [
    {
      role: "user",
      content: "write me a product description of a wireless magic mouse",
    },
  ],
  temperature: 0.7,
});

let config = {
  method: "post",
  maxBodyLength: Infinity,
  url: "https://api.openai.com/v1/chat/completions",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer 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",
    Cookie:
      "__cf_bm=_5N3CvxRhN5gAGcgeWI8nhsNF_wPzeIfCOYmXIVsbzM-1704804324-1-AeNW0EyheIo8IxU5WoqX8iPpyMQnd0RQjCzSrTrWcOlSifeBQEIJBd/j1HkH8VJ/uQmLg2VbuN8N2xeHlfBWwWU=; _cfuvid=pTPsCJtN8i018Y90SfDsnfojQRRioOoxYcCTTKlzSgg-1704804324380-0-604800000",
  },
  data: data,
};

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
    const response = await axios.request(req.body.config);
    res.json(response.data);
  } catch (error) {
    console.error("Error generating response:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(4000, () => console.log("Server running on port 4000"));
