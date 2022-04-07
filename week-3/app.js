const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());

app.set('view engine', 'pug');

app.get('/', (req,res) => {
    const name = req.cookies.username;
    if(name){
        res.render('index', {name}); //原{name:name}，用ES6 shorthand
    } else {
        res.redirect('/hello');
    }
});

app.get('/hello', (req,res) => {
    res.render('hello');
});

app.get('/hello', (req,res) => {
    const name = req.cookies.username;
    if(name){
        res.redirect('/'); 
    } else {
        res.render('/hello');
    }
});

app.post('/hello', (req,res) => {
    res.cookie('username', req.body.username); //send cookie to browser
    res.redirect('/');
});

app.post('/goodbye', (req,res) => {
    res.clearCookie('username');
    res.redirect('/hello');
});

app.listen(3000, () => {
    console.log("Server running on localhost:3000");
});
