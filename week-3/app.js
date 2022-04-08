const express = require("express");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
 
app.set('view engine', 'pug');

//Assignment 4-1~4-2
app.get('/myName', (req,res) => {
    let checkName = req.cookies.name;
    if(checkName){
        res.render('myName', {name: req.cookies.name})
    } else {
        res.render('trackName');
    }
})

app.get('/myName', (req,res) => {
    res.render('myName', {name: req.cookies.name});
});

app.get('/trackName', (req,res) => {
    res.cookie('name', req.query.name); 
    res.render('trackName');
});

//4-5 not working
app.get('/trackName', (req,res) => {
    res.redirect('myName');
});

//trackName用post ok
// app.get('/myName', (req,res) => {
//     res.render('myName', {name: req.cookies.name});
// });

// app.get('/trackName', (req,res) => {
//     res.render('trackName');
// });

// app.post('/trackName', (req,res) => {
//     res.cookie('name', req.body.name); 
//     res.redirect('myName');
// });
//trackName用post ok
 
app.listen(3000, () => {
    console.log("Server listening on port 3000.");
});
