const express = require("express");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
 
app.set('view engine', 'pug');

app.get('/trackName', (req,res) => {
    res.cookie('name', req.query.name);
    res.render('trackName');
});

app.get('/trackName', (req,res) => {
    res.redirect('myName');
});

app.get('/myName', (req,res) => {
    res.render('myName', {namme: req.cookies.name});
});


//trackName用post ok
// app.get('/myName', (req,res) => {
//     res.render('myName', {namme: req.cookies.name});
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
