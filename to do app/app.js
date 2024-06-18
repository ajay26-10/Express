const express = require ('express');
const app = express();
const path = require ('path');
const PORT = 3000;
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const taskList =[];

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'))
});
app.get('/create',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','create.html'))
});
app.get('/submit',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','submit.html'))
});
app.get('/view',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','viewTask.html'))
});
app.get('/viewall',(req,res)=>{
    res.send(taskList)
})

app.get('/create/:id',(req,res)=>{
    const id = req.params.id;
    const tasks = taskList.find(task => task.taskID == id);
    if(!tasks){
        return res.status(404).send("Task Not Found")
    }
    res.sendFile(path.join(__dirname,'public','viewTask.html'))
})

app.get('/api/create/:id', (req,res)=>{
    const id = req.params.id;
    const tasks = taskList.find(task => task.taskID == id);
    if(!tasks){
        return res.status(404).send("Task Not Found. Check Task ID.")
    }
    res.json(tasks);
})

app.post('/create',(req,res)=>{
    const {taskID,taskName,taskDetail} = req.body;
    console.log(req.body);
    const newTask = {taskID,taskName,taskDetail};
    taskList.push(newTask);
    console.log(taskList);
    res.redirect('/submit');
})

app.put('/api/create/:id',(req,res)=>{
    const id = req.params.id;
    const{taskName,taskDetail}= req.body;
    const taskNo =  taskList.findIndex(task => task.taskID ==id);

    if(!taskNo){
        res.status(404).send("Task Not Found. Check Task ID.")
    }

    if(taskName)
        taskList[taskNo].taskName = taskName;
    if(taskDetail)
        tasklist[taskNo].taskDetail = taskDetail;
    res.json(tasklist[taskNo]);             //try res.json(tasklist)
})

app.delete('/api/create/:id',(req,res)=>{
    const id = req.params.id;
    const{taskName,taskDetail}= req.body;
    const taskNo = taskList.findIndex(task => task.taskID == id);

    if(!taskNo){
        res.status(404).send("Task Not Found. Check Task ID")
    }
    const deletedTask= tasklist.splice(taskNo,1)
    res.json(tasklist);                     // hopefully return the new task list after deleting item
})

app.listen(PORT,()=>{
    console.log("Server running at PORT ${PORT}")
});