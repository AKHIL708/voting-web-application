const {
  getAll,
  getOneBasedOnCondition,
  getById,
  insertRow,
  deleteOne,
  update,
} = require("../utils/dbFunctions");
let tableName = "users";

// we will only pass the table name over here thats sit

const getAllUsers = async () => {
  let result = await getAll(tableName);
  return result;
};

const getOneUser = async (conditions) => {
  let result = await getOneBasedOnCondition(tableName, conditions);
  return result;
};

const getUserById = async (id) => {
  let result = await getById(tableName, id);
  return result;
};

const addUser = async (conditions) => {
  let result = await insertRow(tableName, conditions);
  return result;
};

const updateUserById = async (id) => {
  let result = await update(tableName, id);
  return result;
};
const deleteUserById = async (id) => {
  let result = await deleteOne(tableName, id);
  return result;
};

module.exports = {
  getAllUsers,
  getOneUser,
  getUserById,
  addUser,
  updateUserById,
  deleteUserById,
};
