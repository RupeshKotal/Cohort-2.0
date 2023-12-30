const { Router, json } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin,Course} = require("../db");
const router = Router();

// Admin Routes it handels "/admin/signup" route
router.post('/signup',async (req, res) => {
    // Implement admin signup logic
const username = req.body.username;
const password =req.body.password;

const response = await Admin.findOne({
    username:username,
    password:password
})

if(response){
    res.json({
        msg:"admin user already exists"
    })
}else{
    Admin.create({
        username,
        password,
    }      
    )

    res.json({
        msg:"admin user created successfully"
    })

}

    
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description =req.body.description;
    const imageLink= req.body.imageLink;
    const price= req.body.price;

   const course = await Course.create({
        title,
        description,
        imageLink,
        price
    })

    res.json({
        msg : "Course created successfully",
        courseID : course._id
    })
});

module.exports = router;