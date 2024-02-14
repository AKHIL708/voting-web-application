const router = require("express").Router();
const {
  getAllUsers,
  getOneUser,
  getUserById,
  addUser,
  updateUserById,
  deleteUserById,
} = require("../models/users.model");

// only req.body object data will be pass from here ..

router.get("/", async (req, res) => {
  let result = await getAllUsers();
  return controllerResponseAndErrorHanlder(result, res);
});

router.post("/login", async (req, res) => {
  let result = await getOneUser(req.body);
  return controllerResponseAndErrorHanlder(result, res);
});

router.get("/getById", async (req, res) => {
  let result = await getUserById(req.body);
  return controllerResponseAndErrorHanlder(result, res);
});

router.post("/register", async (req, res) => {
  let result = await addUser(req.body);
  return controllerResponseAndErrorHanlder(result, res);
});

router.put("/update", async (req, res) => {
  // the req.body format will be
  //    {
  //     "id" : "1705920510203",
  //     "data" : [
  //         {
  //             "column" : "userName",
  //             "value" : "userTwo2222"
  //         }
  //     ]
  // }
  let result = await updateUserById(req.body);
  return controllerResponseAndErrorHanlder(result, res);
});

router.delete("/delete", async (req, res) => {
  let result = await deleteUserById(req.body);
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
