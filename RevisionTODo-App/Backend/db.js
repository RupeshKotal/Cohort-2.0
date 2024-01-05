const m = require("mongoose");
const { boolean } = require("zod");

m.connect('mongodb+srv://rupeshkotal99:Asdfghjkl%40786@cluster0.lwxkmgh.mongodb.net/TodoRevision')

const schema = m.Schema({
    title:String,
    description:String,
    completed: Boolean
})

const todoDB = m.model('Todo',schema);

module.exports={
    todoDB
}