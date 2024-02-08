const express = require('express')
const accountReq = express.Router()
const {authmiddalWare} = require("../middelware/authmiddelware")
const {accountDb}  = require("../db")
const mongoose = require("mongoose")

accountReq.get('/balance',authmiddalWare,async (req,res)=>{
    const account = await accountDb.findOne({
        accountId:req.middeluserId
    })

    res.status(200).json({
          balance: account.balance
    })
})


accountReq.post("/transfer",authmiddalWare, async (req,res) =>{
    const session = await mongoose.startSession();

    session.startTransaction();

    // in "to" we have to send accountID in req.body of user whom we have to send money;
    //in amount we have to send ammount
    const {amount,to} = req.body;

    // fetch account details from  account Db within the transaction


    //req.middeluserId we got from authmidleware which set _id of logged in user in req object

    const account = await accountDb.findOne({accountId:req.middeluserId }).session(session);

    if(!account|| account.balance < amount){
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance"
        })
    }

     const toAccount =await accountDb.findOne({accountId:to}).session(session)

     if(!toAccount){
      await session.abortTransaction();

      return res.json({
        message:"Invalid sender user account"
      })
     }

     //perform transaction

     
     await accountDb.updateOne({accountId:req.middeluserId},{$inc:{ balance: -amount }}).session(session)


     await accountDb.updateOne({accountId:to},
       {
        $inc:{
            balance:amount
        }
       } 
        ).session(session)


        //Commmit the Transaction

        await session.commitTransaction();

        res.json({
            message:"Transfer successful"
        })

})

module.exports={
    accountReq
}