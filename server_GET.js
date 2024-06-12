const express = require('express');

const app = express();
const PORT = 3000;

app.get('/',(req,res)=>{
    res.status(200);
    res.send("Home");
})

app.get('/hi', (req,res)=>{
    res.status(200);
    res.send("Welcome to this directory")
})

app.get('/tag', (req,res)=>{
    // console.log("ajay",req)
    res.status(200);
    res.send("<h1>THIS IS H1 TAG</h1>")
})

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);