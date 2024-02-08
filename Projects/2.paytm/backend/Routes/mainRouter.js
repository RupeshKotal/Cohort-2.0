const express =require('express')
const {userRequests} = require("./userRequest")
const {accountReq} =require("./accountRoute")


const userRoutes = express.Router()
const accountRoutes = express.Router()

userRoutes.use('/users',userRequests)
accountRoutes.use("/account",accountReq)


module.exports={
    userRoutes,
    accountRoutes
}