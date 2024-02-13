const {
  getAll,
  getOneBasedOnCondition,
  insertRow,
  getById,
  update,
  deleteForeignKeyRow,
} = require("../utils/dbFunctions");
let tableName = "candidates";

const getAllCandidates = async () => {
  let result = await getAll(tableName);
  return result;
};

const addCandidate = async (conditions) => {
  let result = await insertRow(tableName, conditions);
  return result;
};

const getCandidateById = async (conditions) => {
  let result = await getById(tableName, conditions);
  return result;
};
const updateCandidate = async (conditions) => {
  let result = await update(tableName, conditions);
  return result;
};

const deleteCandidate = async (conditions) => {
  let result = await deleteForeignKeyRow("votes", tableName, conditions);
  return result;
};

module.exports = {
  getAllCandidates,
  addCandidate,
  getCandidateById,
  updateCandidate,
  deleteCandidate,
};
