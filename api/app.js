//import required packages
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");

const { Server } = require("socket.io");
const server = require("http");

//import required router files
const example = require("./example/exampleRouter");
const users = require("./users/usersRouter");
const customers = require("./customers/customersRouter");

//define app
const app = express();

//middleware
app.use(helmet());
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

//define routes linking with imported files
app.use("/example", example);
app.use("/users", users);
app.use("/customers", customers);

//test api route
app.get("/", (req, res) => {
  res.json("Hello from the app.js file!");
});

module.exports = app;
