const router = require("express").Router();
const {
  getAllVotes,
  insertVote,
  getSpecificElectionResult,
} = require("../models/voting.model");

router.get("/", async (req, res) => {
  let result = await getAllVotes();
  return controllerResponseAndErrorHanlder(result, res);
});

router.post("/add", async (req, res) => {
  let result = await insertVote(req.body);
  return controllerResponseAndErrorHanlder(result, res);
});

router.post("/getSpecificEletionResult", async (req, res) => {
  //   [
  //     {
  //       column: "election_id",
  //       value: 123,
  //     },
  //   ];
  let result = await getSpecificElectionResult(req.body);
  return controllerResponseAndErrorHanlder(result, res);
});

// custom functions ..
function controllerResponseAndErrorHanlder(result, res) {
  if (result.err) {
    console.log(result);
    return res.status(500).json({
      err: result.err,
      message: result.message,
      code: result.code,
      sql: result.query,
    });
  } else {
    return res.status(200).json({
      message: "success",
      result,
    });
  }
}

module.exports = router;
