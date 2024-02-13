const pool = require("../db/db");
const errorHandler = require("./errorHandler");

async function getAll(tableName) {
  let sql = `select * from ${tableName}`;
  return errorHandler(sql);
}

async function getById(tableName, id) {
  let sql = `select * from ${tableName} where id = "${id}"`;
  return errorHandler(sql);
}
async function getOneBasedOnCondition(tableName, conditions) {
  let reConditions = conditions
    .map(({ column, value }) => `${column} = "${value}"`)
    .join(" AND ");
  let sql = `select * from ${tableName} where ${reConditions} ;`;
  return errorHandler(sql);
}

async function update(tableName, conditions) {
  //     UPDATE table_name
  // SET column1 = value1, column2 = value2, ...
  // WHERE condition;
  let reConditions = conditions.data
    .map(({ column, value }) => `${column} = "${value}"`)
    .join(" , ");

  // format sent will be like this req.body ok
  //    {
  //     "id" : "1705920510203",
  //     "data" : [
  //         {
  //             "column" : "userName",
  //             "value" : "userTwo2222"
  //         }
  //     ]
  // }
  let sql = `UPDATE ${tableName} SET ${reConditions} WHERE id = "${conditions.id}"`;
  return errorHandler(sql);
}

async function deleteOne(tableName, userId) {
  // assuming that the column name in the table will be id  orelse pass conditions according #array
  let sql = `DELETE FROM ${tableName} WHERE id = "${userId}";`;
  return errorHandler(sql);
}

module.exports = {
  getAll,
  getOneBasedOnCondition,
  getById,
  deleteOne,
  update,
};
