const express = require('express');
const a = express();

const mw1=(req,res,next)=>{
    console.log("MW1");
    next();
}

a.get('/hi',(req,res)=>{
    res.send("hi");
})

a.use(mw1);

a.get('/hello', (req,res)=>{
    res.send("Hello")
});

a.listen(3000, () => {
    console.log('Server is running on port 3000');
  });