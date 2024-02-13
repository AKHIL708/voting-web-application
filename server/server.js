const app = require("./app");
require("./db/db")
const PORT = 4000;

let server = app.listen(PORT , (err) =>{
    if(!err){
        console.log("Server Listening Sucacessfully...")
    }
    
})