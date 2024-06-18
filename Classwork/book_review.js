const express = require ('express')
const app = express();

const book = (req,res,next)=>{
    JSON.parse(title,review);
}

app.use(book);

app.post('/review',(req,res)=>{
    const {title,review}= req.body;
    console.log(`Review Added`);
    console.log(`Book Title:`, title);
    console.log(`Review:`,review)
});

app.listen(3000, (error)=>{
    if(!error){
        console.log(`Running Suceesfully at port 3000`)
    }
    else{
        console.log(`Error occurred`, error)
    }
});