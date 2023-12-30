const { Router, json } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin,Course} = require("../db");
const router = Router();

// Admin Routes it handels "/admin/signup" route
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

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic

   const title = req.body.title;
   const discription=req.body.discription;
   const imagelink = req.body.imagelink;
   const price = req.body.price;

 const Newcourse = await Course.create({
    title,
    discription,
    imagelink,
    price
   })
   res.json({
    message : "Course created successfully", courseid : Newcourse._id
   })

});

router.get('/courses', adminMiddleware,async (req, res) => {
    // Implement fetching all courses logic

    const response = await Course.find({});

    res.json({
       course: response
    })
});

module.exports = router;