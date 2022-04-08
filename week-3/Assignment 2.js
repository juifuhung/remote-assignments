const express = require("express");
const app = express();

app.get("/getData", (req,res) => {
    let result = 0;
    if(!req.query.number){
        result = "Lack of Parameter";
    } else if(isNaN(req.query.number)){
        result = "Wrong Parameter";
    } else {
        result = ((1 + Number(req.query.number))*Number(req.query.number))/2;
    }
    res.send(`${result}`);
});

app.listen(3000, () => {
    console.log("Server listening on Port 3000.");
});
