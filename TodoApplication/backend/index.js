const express = require('express')
const app = express();
app.use(express.json());
const {valid,id_valid} = require('./type')
const {todoDb} = require('./db')

const cors = require('cors');
app.use(cors(
//     {
//     origin: "http://localhost:5173/"
// }
))


app.post('/addTod', async (req,res)=>{
   const titlepayload = req.body;
   const todovalidation = valid.safeParse(titlepayload);

   if(!todovalidation.success){
    res.status(411).json({
        msg : "Invalid Input"
    })
   }else{
      await todoDb.create({
        title: titlepayload.title,
        description: titlepayload.description,
        status: false
       })

       res.json({
        msg:'Created todo'
       })
   }
})

app.get('/getTod', async(req,res)=>{
  const response =  await todoDb.find({});

  res.json({
    response
  })


})

app.put('/putTod',async (req,res)=>{
    const updatepayload = req.body;
    const parsepayload = id_valid.safeParse(updatepayload);

    if(!parsepayload.success){
        res.status(411).json({
            msg : "Invalid Input"
        })
       }else{
          await todoDb.update({
            _id:req.body.id
          },{
            status : true
          })
       }
})

app.listen(3000)