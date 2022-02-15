const express = require('express');  // import express
const { render } = require('express/lib/response');
const path = require('path');  // import path

const app = express();    // app initialized

console.log(__dirname);
console.log(path.join(__dirname, '../views'));
const staticPath = path.join(__dirname, '../views');

// to set the view engine
app.set('view engine', "hbs");

app.get('/', (req, res) =>{
    res.render('index', {
        channelName: "alina"
    })
})

// builtin middleware
app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.send("hello from express");
})

app.get("/about", (req, res) => {
    res.send("This is a training from me");
})

app.get("/gallery", (req, res) => {
    res.send("this is a gallery for your information")
})

app.listen(3000, () => {
    console.log("listening to port at 3000")
})