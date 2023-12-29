const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    Admin.findOne({
        username:username,
        password : password
    }).then(function(response){
        if(response){
            res.status(403).json({
                msg:"User already exists"
            })
        } else{
            Admin.create({
                username,
                password
            }).then(function(response){
                msg : "User created Successfully"
            })
        }
    })
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;