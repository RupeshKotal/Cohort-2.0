const mongoose =require('mongoose');
const { boolean } = require('zod');

mongoose.connect('mongodb+srv://rupeshkotal99:Asdfghjkl%40786@cluster0.lwxkmgh.mongodb.net/TodoDb');

const schema = mongoose.Schema({
    title:String,
    description:String,
    status:Boolean
})

const todoDb = mongoose.model('todos',schema)

module.exports={
    todoDb
}