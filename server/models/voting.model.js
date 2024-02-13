const { insertRow, getOneBasedOnCondition , getAll } = require("../utils/dbFunctions");
const errorHandler = require("../utils/errorHandler");
let tableName = "votes";


const getAllVotes = async () =>{
 let result = await getAll(tableName);
 return result;
}

const insertVote = async (conditions) => {
  let result = await insertRow(tableName, conditions);
  return result;
};

const getSpecificElectionResult = async (conditions) => {
  let result = await getOneBasedOnCondition(tableName, conditions);
  return result;
};

module.exports = {
    getAllVotes ,
  insertVote,
  getSpecificElectionResult,
};
