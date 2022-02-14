const express = require('express');  // import express

const app = express();    // app initialized


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