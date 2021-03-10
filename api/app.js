const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json("Hello from the app.js file!");
});

module.exports = app;
