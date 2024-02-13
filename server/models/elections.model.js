const {
  getAll,
  getById,
  insertRow,
  update,
  deleteOne,
} = require("../utils/dbFunctions");
let tableName = "elections";

const getAllElections = async () => {
  let result = await getAll(tableName);
  return result;
};

const getElectionById = async (conditions) => {
  let result = await getById(tableName, conditions);
  return result;
};

const AddElection = async (conditions) => {
  let result = await insertRow(tableName, conditions);
  return result;
};

const updateElection = async (conditions) => {
  let result = await update(tableName, conditions);
  return result;
};

const deleteElection = async (conditions) => {
  let result = await deleteOne(tableName, conditions);
  return result;
};

module.exports = {
  getAllElections,
  getElectionById,
  AddElection,
  updateElection,
  deleteElection,
};
