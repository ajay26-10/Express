const express = require ('express')
const app = express();

const book = (req,res,next)=>{

}


app.post('/review',(req,res)=>{
    const {title,review}= req.body;
});


app.listen(3000, (error)=>{
    if(!error){
        console.log(`Running Suceesfully`)
    }
    else{
        console.log(`Error occurred`, error)
    }
});