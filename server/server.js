const app = require("./app");
require("./db")
const PORT = 5000;

let server = app.listen(PORT , (err) =>{
    if(!err){
        console.log("Server Listening Sucacessfully...")
    }
    
})