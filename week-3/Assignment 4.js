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
        res.redirect('trackName');
    }
});

//建立路由：共四種版本

//Version 1: 使用POST方法：無法在query顯示輸入內容
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

//Version 2: 直接把POST程式碼改成GET：資料存不進去cookie ，也無法在輸入完後自動導引至/myName
app.get('/myName', (req,res) => {
    res.render('myName', {name: req.cookies.name});
});
 
app.get('/trackName', (req,res) => {
    res.render('trackName');
});
 
app.get('/trackName', (req,res) => {
    res.cookie('name', req.body.name); 
    res.redirect('myName');
});

//Version 3: 使用GET，可以存進cookie，但無法在輸入完後自動導引至/myName
app.get('/myName', (req,res) => {
    res.render('myName', {name: req.cookies.name});
});

app.get('/trackName', (req,res) => {
    res.cookie('name', req.query.name); 
    res.render('trackName'); 
});
 
app.get('/trackName', (req,res) => {
    res.redirect('myName');
});

//Version 4: 使用GET，直接導引至/myName，沒有停留在/trackName給我輸入
app.get('/myName', (req,res) => {
    res.render('myName', {name: req.cookies.name});
});

app.get('/trackName', (req,res) => {
    res.cookie('name', req.query.name); 
    res.redirect('myName'); 
});
 
//監聽
app.listen(3000, () => {
    console.log("Server listening on port 3000.");
});
