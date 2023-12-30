const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User,Course} = require("../db");
// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic

    const username = req.body.username;
    const password =req.body.password;

    User.create({
        username,
        password
    })
    res.json({
        msg:"User Created Successfuly"
    })
});

router.get('/courses',async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});

    res.json({
       course: response
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username =req.headers.username;

    User.updateOne({
        username: username
    },{
         "$push":{
            purchesedCourse:courseId
         }
    })

    res.json({
        message: "Purchase completed"
    })
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic

    const user =await User.findOne({
        username: req.headers.username
    });
    console.log(user.purchesedCourse);

    const courses = await Course.find({
       _id:{
        "$in" : user.purchesedCourse
       } 
    })

    res.json({
        courses: courses
    })
});

module.exports = router