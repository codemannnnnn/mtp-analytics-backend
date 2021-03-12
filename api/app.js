//import required packages
const express = require("express");
const dotenv = require("dotenv");

//import required router files
const example = require("./example/exampleRouter");

//define app
const app = express();

//middleware
app.use(express.json());

//define routes linking with imported files
app.use("/example", example);

//test api route
app.get("/", (req, res) => {
  res.json("Hello from the app.js file!");
});

module.exports = app;
