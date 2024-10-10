const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

const app = express();
require("dotenv").config();

app.use(express.static(path.join(__dirname, "public")));

// Serve index.html from the root directory
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });
app.get("/data", (req, res) => {
  res.json({ secretKey: process.env.API_KEY });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
