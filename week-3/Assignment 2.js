const express = require("express");
const app = express();

app.get("/getData", (req,res) => {
    let result = 0;
    if(!req.query.number){
        result = "Lack of Parameter";
    } else if(isNaN(req.query.number)){
        result = "Wrong Parameter";
    } else {
        for(let i=0; i<=req.query.number; i++){
            result += i;
        }
    }
    res.send(`${result}`);
});

app.listen(3000, () => {
    console.log("Server listening on Port 3000.");
});
