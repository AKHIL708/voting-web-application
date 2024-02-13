const pool = require("../db/db");
async function errorHandler(sql) {
  try {
    let [result] = await pool.promise().query(sql);
    return result;
  } catch (err) {
    const errorResult = {
      message: err,
      err: err.message,
      code: err.code,
      query: sql,
    };
    return errorResult;
  }

  //   from the above two values will be return one is the actucal value whic we get from mysql databse
  // and the second one is an error object which contains {
  //     "err": "Unknown column 'isd' in 'where clause'",
  //     "message": {
  //         "message": "Unknown column 'isd' in 'where clause'",
  //         "code": "ER_BAD_FIELD_ERROR",
  //         "errno": 1054,
  //         "sql": "select * from users where isd = \"1705921203132\"",
  //         "sqlState": "42S22",
  //         "sqlMessage": "Unknown column 'isd' in 'where clause'"
  //     },
  //     "code": "ER_BAD_FIELD_ERROR",
  //     "sql": "select * from users where isd = \"1705921203132\""
  // }

  //   if error contains we are getting the result.err in the controller file and tackling that one like this
  //    if (result.err) {
  //     console.log(result);
  //     return res.status(500).json({
  //       err: result.err,
  //       message: result.message,
  //       code: result.code,
  //       sql: result.query,
  //     });
  //   } else {
  //     return res.status(200).json({
  //       message: "success",
  //       result,
  //     });
  //   }

  //   done
}
module.exports = errorHandler;