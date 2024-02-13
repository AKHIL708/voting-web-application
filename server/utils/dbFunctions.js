const pool = require("../db/db");
const errorHandler = require("./errorHandler");

async function getAll(tableName) {
  let sql = `select * from ${tableName}`;
  return errorHandler(sql);
}

async function getById(tableName, { columnName, id }) {
  let sql = `select * from ${tableName} where ${columnName} = ${id}`;
  return errorHandler(sql);
}
async function getOneBasedOnCondition(tableName, conditions) {
  let reConditions = conditions
    .map(({ column, value }) => `${column} = "${value}"`)
    .join(" AND ");
  let sql = `select * from ${tableName} where ${reConditions} ;`;
  return errorHandler(sql);
}

// INSERT INTO table_name (column1, column2, column3, ...)
// VALUES (value1, value2, value3, ...);

async function insertRow(tableName, conditions) {
  let columns = conditions.map(({ column }) => `${column}`).join(" , ");
  let values = conditions.map(({ value }) => `"${value}"`).join(" , ");
  let sql = `INSERT INTO ${tableName} (${columns}) VALUES (${values})`;
  return errorHandler(sql);
}

async function update(tableName, conditions) {
  //     UPDATE table_name
  // SET column1 = value1, column2 = value2, ...
  // WHERE condition;
  let reConditions = conditions.data
    .map(({ column, value }) => `${column} = "${value}"`)
    .join(" , ");

  //   {
  //     "getId": {
  //         "columnName": "election_id",  // vary everytime
  //         "value": 123
  //     },
  //     "data": [
  //         {
  //             "column": "start_date",
  //             "value": "updated tmr"
  //         }
  //     ]
  // }

  let sql = `UPDATE ${tableName} SET ${reConditions} WHERE ${conditions.getId.columnName} = "${conditions.getId.value}"`;
  return errorHandler(sql);
}

async function deleteOne(tableName, { columnName, value }) {
  // assuming that the column name in the table will be id  orelse pass conditions according #array
  let sql = `DELETE FROM ${tableName} WHERE ${columnName} = "${value}";`;
  return errorHandler(sql);
}

async function deleteForeignKeyRow(
  tableNameOne,
  tableNameTwo,
  { columnName, value }
) {
  let sql1 = `DELETE FROM ${tableNameOne} WHERE ${columnName} = "${value}";`;
  if (!errorHandler(sql1).err) {
    let sql2 = `DELETE FROM ${tableNameTwo} WHERE ${columnName} = "${value}";`;
    return errorHandler(sql2);
  } else {
    return errorHandler(sql1);
  }
}

module.exports = {
  getAll,
  getOneBasedOnCondition,
  getById,
  insertRow,
  update,
  deleteOne,
  deleteForeignKeyRow,
};
