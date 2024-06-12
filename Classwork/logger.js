const express = require('express')
const app = express();

const logger = (req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
}

app.use(logger);        //for all routes

app.get('/',(req,res)=>{
    res.send(`Logged Successfully!`)
});

app.listen(3000, (error)=>{
    if(!error){
        console.log("Server is Successfully Running")
    }

    else{
        console.log("Error occurred",error)
    }
});