const express = require('express');
const {userDb} = require('../db');
const userRequests = express.Router();
const {secret} = require('../config')
const {authmiddalWare} =require('../middelware/authmiddelware')
const {accountDb} = require("../db")
const jwt = require('jsonwebtoken')
const zod = require('zod')

const userZod = zod.object({
    username : zod.string().email(),
    password:zod.string(),
    firstName:zod.string(),
    lastName:zod.string()
})

userRequests.post('/signup',async (req,res)=>{
    const body= req.body
    
    const {success} = userZod.safeParse(body);

    if(!success){
        res.status(411).json({
            msg: "Invalid input"
        })
    }

    try {
        
    const userexists = await userDb.findOne({
        username:req.body.username
    })

    if(userexists){
        res.status(411).json({
            msg: "User already exists"
        })
    }

    const users =await userDb.create({
        username:req.body.username,
        password:req.body.password,
        firstName:req.body.firstName,
        lastName:req.body.lastName
    })

   

    const userId = users._id;  //** */

     // --- Create a new balance account

     await accountDb.create({
        accountId:userId,
        balance:1 + Math.random() * 10000
     })

    const token = jwt.sign({JwtuserId:userId},secret)

    res.status(200).json({
        msg:"Accout created successfully",
        token:token
    })



    } catch (error) {
        console.log(error)
    }

    
})


/// **********    SIGIN Request ****************

const signinZod =  zod.object({
    username:zod.string(),
    password:zod.string()
})

userRequests.post('/signin', async (req,res)=>{
     const body = req.body;
     const {success} = signinZod.safeParse(body);

     if(!success){
        res.status(411).json({
            msg: "Invalid input"
        })
    }

    try {
        const finduser = await userDb.findOne({
            username:req.body.username,
            password:req.body.password
        })

        if(finduser){
         const token = jwt.sign({
            userid: finduser._id
         },secret)
            res.status(200).json({
              msg:"Successfully login",
              signinToken:token
            })
        }else{
            res.status(411).json({
                msg:"Please check username or password must be inncorect"
            })
        }
    } catch (error) {
        console.log("error in",error);
    }


})


// Update Request

const updateZod = zod.object({
    password:zod.string().optional(),
    firstName:zod.string().optional(),
    lastName:zod.string().optional()
})

userRequests.put("/update",authmiddalWare,async (req,res)=>{
  const {success}= updateZod.safeParse(req.body)

  if(!success){
    res.json({
        msg:"Error while updating"
    })
  }

  await userDb.updateOne(
    {
        _id:req.middeluserId
      },
    req.body)

  res.status(200).json({
    msg:"Data Updated Successfully"
  })
})

userRequests.get("/search",authmiddalWare, async (req,res)=>{

    const filter = req.query.filter || ""

    const userFilter = await userDb.find({
        $or:[
           {firstName:{
            "$regex":filter
           }},
           {
            lastName:{
                "$regex":filter
            }
           } 
        ]
    })

    res.status(200).json({
        userData : userFilter.map(user =>({
           username: user.username,
           firstname: user.firstName,
           lastname: user.lastName 
        }))
    })


})

module.exports={
    userRequests
}