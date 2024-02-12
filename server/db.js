const mysql = require("mysql2");

const connection = mysql.createConnection({
    user : "root",
    password : "root123",
    database : "voting-application",
    host : "localhost"
});

let db = connection.connect((err) =>{
    if(!err){
        console.log("DB Connected...");
    }else{
        console.log("DB NOT CONNECTED!" , err)
    }
});

module.exports = db;