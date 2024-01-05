const express = require('express');
const app =express();
const {createTodo,updateTodo} = require('./types')
const {todoDB} = require('./db')
const cors = require('cors')

app.use(express.json());
app.use(cors({}))

app.post('/todo', async (req,res)=>{

    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);

    if(!parsePayload.success){
        res.status(411).json({
            msg:"wrong  input"
        })
    }else{
  await todoDB.create({
    title:createPayload.title,
    description:createPayload.description,
    completed:false
   })

   res.json({
    msg :"ToDo Created"
   })
    }

})

app.get('/todos', async (req,res)=>{
    const getTodo = await todoDB.find({})
    
    res.json({
        getTodo
    })
})


app.put('/completed', async (req,res)=>{

    const updatepayLoad = req.body;
    const parsePayload = updateTodo.safeParse(updatepayLoad);
    

    if(!parsePayload.success){
        res.status(411).json({
            msg:"Invalid Inpu"
        })
    }else{
       
        //updateOne accepts two object {what we have to update},{what to update on specific condition}
        await todoDB.updateOne({
            _id:req.body.id
        },{
            completed:true
        })

        res.json({
            msg:"Todo Completed"
        })
    }

})


app.listen(3000)


