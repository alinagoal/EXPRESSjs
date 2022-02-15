const express = require('express');

const app = express();
const port = 8000;

app.get('/', (req, res) =>{
    res.write("<h1>welcome to my home page</h1>")
    res.write("<h1>welcome to my home page again</h1>")  //multiple response
    res.send();  // closes the connection
})

app.get('/about', (req, res) =>{
    res.status(200).send(" welcome to my about page")
})

app.get('/contact', (req, res) =>{
    res.send(" welcome to my contact page")
})

app.get('/temp', (req, res) => {
    res.send([{
        id: 1,
        name: "alina",
    },
    {
        id: 1,
        name: "alina",
    }])
})

app.listen(port, () =>{
    console.log(`listening to port ${port}`)
})