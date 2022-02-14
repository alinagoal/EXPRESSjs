const express = require('express');

const app = express();
const port = 8000;

app.get('/', (req, res) =>{
    res.send("welcome to my home page")
})

app.get('/about', (req, res) =>{
    res.status(200).send(" welcome to my about page")
})

app.get('/contact', (req, res) =>{
    res.send(" welcome to my contact page")
})

app.get('/temp', (req, res) =>{
    res.send(" welcome to my temp page")
})

app.listen(port, () =>{
    console.log(`listening to port ${port}`)
})