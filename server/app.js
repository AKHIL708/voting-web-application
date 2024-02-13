const express = require("express");
const bodyParser = require("body-parser");
const usersController = require("./controllers/users.controller");
const app = express();
// Parse URL-encoded data
app.use(express.urlencoded({ extended: false }));

//Parse JSON data
app.use(express.json());

app.use("/v1/users", usersController);

module.exports = app;
