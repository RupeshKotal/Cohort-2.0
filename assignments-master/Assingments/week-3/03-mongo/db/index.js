const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://rupeshkotal99:Asdfghjkl%40786@cluster0.lwxkmgh.mongodb.net/Course-Selling-App');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username : String,
    password :String
    
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username:String,
    password:String,
    purchesedCourse:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course"
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition     
    title:String,
    discription:String,
    imgelink:String,
    price:Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}