const express = require("express");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
 
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());

app.use(express.static('public'));
 
app.set('view engine', 'pug');

//Assignment 1
app.get('/', (req,res) => {
    res.render('index');  
});

//Assignment 2
app.get("/getData", (req,res) => {
    let result = 0;
    if(!req.query.number){
        result = "Lack of Parameter";
    } else if(isNaN(req.query.number) || (req.query.number % 1 !== 0) || req.query.number < 0){
        result = "Wrong Parameter";
    } else {
        for(let i=0; i<=req.query.number; i++){
            result += i;
        }
    }
    res.send(`${result}`);
});

//Assignment 4
app.get('/myName', (req,res) => {
    let checkName = req.cookies.name;
    if(checkName){
        res.render('myName', {name: req.cookies.name})
    } else {
        res.redirect('trackName');
    }
});

app.get('/myName', (req,res) => {
    res.render('myName', {name: req.cookies.name});
});
 
app.get('/trackName', (req,res) => {
    res.render('trackName');
});
 
app.post('/trackName', (req,res) => {
    res.cookie('name', req.body.name); 
    res.redirect('myName');
});

//Listen
app.listen(3000, () => {
    console.log("Server listening on Port 3000.");
});
