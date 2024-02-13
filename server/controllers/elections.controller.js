const router = require("express").Router();
const {
  getAllElections,
  getElectionById,
  AddElection,
  updateElection,
  deleteElection,
} = require("../models/elections.model");

router.get("/", async (req, res) => {
  let result = await getAllElections();
  return controllerResponseAndErrorHanlder(result, res);
});

router.get("/getById", async (req, res) => {
  let result = await getElectionById(req.body);
  return controllerResponseAndErrorHanlder(result, res);
});

router.post("/add", async (req, res) => {
  let result = await AddElection(req.body);
  return controllerResponseAndErrorHanlder(result, res);
});

router.put("/update", async (req, res) => {
  let result = await updateElection(req.body);
  return controllerResponseAndErrorHanlder(result, res);
});

router.delete("/delete", async (req, res) => {
  let result = await deleteElection(req.body);
  return controllerResponseAndErrorHanlder(result, res);
});

// customer functions ..
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
