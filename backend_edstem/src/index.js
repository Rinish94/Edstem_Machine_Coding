const express = require("express");
const usercontroller = require("./controllers/user.controller");

// const { resolve } = require("path");
const app = express();

app.use(express.json());

const server = require("http").createServer(app);

app.use("/user", usercontroller);

module.exports = server;
