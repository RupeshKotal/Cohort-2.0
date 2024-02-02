const express =require('express')
const {userRequests} = require("./userRequest")


const userRoutes = express.Router()
userRoutes.use('/users',userRequests)


module.exports={
    userRoutes
}