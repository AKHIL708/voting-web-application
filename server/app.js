const express = require("express");
const cors = require("cors");
const usersController = require("./controllers/users.controller");
const electionsController = require("./controllers/elections.controller");
const votingController = require("./controllers/voting.controller");
const candidateController = require("./controllers/candidate.controller");

const app = express();

// Parse URL-encoded data
app.use(express.urlencoded({ extended: false }));

//Parse JSON data
app.use(express.json());

app.use(cors());

app.use("/v1/users", usersController);
app.use("/v1/elections", electionsController);
app.use("/v1/voting", votingController);
app.use("/v1/candidate", candidateController);

module.exports = app;
