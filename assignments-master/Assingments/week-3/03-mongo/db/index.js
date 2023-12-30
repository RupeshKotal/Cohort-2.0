const mongooes = require('mongoose');

mongooes.connect('mongodb+srv://rupeshkotal99:Asdfghjkl%40786@cluster0.lwxkmgh.mongodb.net/Udemy')

const adminSchema = new mongooes.Schema({
    username : String,
    password :String
})

const userSchema = new mongooes.Schema({
    username : String,
    password : String,
    puchasedCourse:[{
         type: mongooes.Schema.Types.ObjectId,
         ref:'Course'
    }]
})

const CourseSchema = new mongooes.Schema({
    title:String,
    description:String,
    imageLink : String,
    price: Number
})

const Admin = mongooes.model("Admin",adminSchema);
const User = mongooes.model("User",userSchema);
const Course = mongooes.model("Course",CourseSchema);


module.exports={
    Admin,
    User,
    Course
}