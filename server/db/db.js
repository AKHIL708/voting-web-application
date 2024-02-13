const mysql = require("mysql2");

const connection = mysql.createPool({
  user: "root",
  password: "root123",
  database: "voting-application",
  host: "localhost",
});

 connection.getConnection((err) => {
  if (!err) {
    console.log("DB Connected...");
  } else {
    console.log("DB NOT CONNECTED!", err);
  }
});

module.exports = connection;
