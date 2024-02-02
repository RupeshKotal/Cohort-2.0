const m = require('mongoose');
const { string } = require('zod');

m.connect("mongodb+srv://rupeshkotal99:Asdfghjkl%40786@cluster0.lwxkmgh.mongodb.net/Paytm")

const userSchema = new m.Schema({
    username : String,
    password: String,
    firstName: String,
    lastName: String
})

const accountSchema = new m.Schema({
    accountId:{
        type: m.Schema.Types.ObjectId, // this will store abject id value 
        ref: "User",   
        required:true
    },

    balance:{
      type:String,
      required:true
    }
})

const userDb = m.model('User',userSchema)
const accountDb = m.model("Account",accountSchema)

module.exports={
    userDb,
    accountDb
}