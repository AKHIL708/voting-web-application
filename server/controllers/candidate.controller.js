const router = require("express").Router();
const {
  getAllCandidates,
  getCandidateById,
  addCandidate,
  updateCandidate,
  deleteCandidate,
} = require("../models/candidate.model");

router.get("/", async (req, res) => {
  let result = await getAllCandidates();
  return controllerResponseAndErrorHanlder(result, res);
});

router.get("/getById", async (req, res) => {
  let result = await getCandidateById(req.body);
  return controllerResponseAndErrorHanlder(result, res);
});

router.post("/add", async (req, res) => {
  let result = await addCandidate(req.body);
  return controllerResponseAndErrorHanlder(result, res);
});

router.put("/update", async (req, res) => {
  let result = await updateCandidate(req.body);
  return controllerResponseAndErrorHanlder(result, res);
});

router.delete("/delete", async (req, res) => {
  let result = await deleteCandidate(req.body);
  return controllerResponseAndErrorHanlder(result, res);
});

// custom function
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
