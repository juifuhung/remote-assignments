const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine', 'pug');

app.get('/hello', (req,res) => {
    res.render('hello');
});

app.post('/hello', (req,res) => {
    res.render('hello', {name: req.body.username});
});

app.listen(3000, () => {
    console.log("Server running on localhost:3000");
});
