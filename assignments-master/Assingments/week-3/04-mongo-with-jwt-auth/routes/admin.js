const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin} = require("../db");
const jwt = require('jsonwebtoken')
const secret = require("../index");
// const jwtpassword = require("../index");

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;   
    const password = req.body.password;

    Admin.findOne({  //this will find any user present in db with this username 
        username:username,
        password : password
    }).then(function(response){
        if(response){
            res.status(403).json({
                msg:"Admin user already Signed up"    // if it will get any username with the same it will give 403 response 
            })
        } else{
            Admin.create({    //else it will create user with provide 
                username,
                password
            }).then(function(response){
               res.json({
                msg : "Admin user created Successfully"   // msg after provide username and password
               }) 
            })
        }
    })

});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const username =req.body.username;
    const password = req.body.password;

    const User = Admin.find({
        username,
        password
    })

    if(User){
       const token = jwt.sign({
        username
       },jwtpassword) ;
       res.json({
        token
       })
    }else{
        res.status(403).json({
            msg : "Incorect username and password"
        })
    }
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;