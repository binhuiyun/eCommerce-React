const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

app.get("/", (req, res) => {
  res.json("Hello World!");
});

app.post("/signup", (req, res) => {
  const { email, password } = req.body;
  res.json({ email, password });
});

app.listen(4000, () => console.log("Server running on port 4000"));
