const express = require('express');
const app = express();

const mw1=(req,res,next)=>{
    console.log("Middleware 1 in this route");
    next();
}

const mw2=(req,res,next)=>{
    console.log("Middleware 2 in this route");
    next();
}

const mw3=(req,res,next)=>{
    console.log("Middleware 3 in this route");
    next();
}

app.get('/hi', mw1, mw3, (req,res)=>{
    res.send("Hi")
})

app.get('/hello', mw2, (req,res)=>{
    res.send("Hello")
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });