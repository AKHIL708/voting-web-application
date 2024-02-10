const app = require("./app");
const PORT = 5000;

let server = app.listen(PORT , (err) =>{
    if(!err){
        console.log("Server Listening Successfully...")
    }
    
})