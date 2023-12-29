// Middleware for handling auth
const {Admin} = require("../db/index")


function adminMiddleware (req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const username = req.headers.username;
    const password = req.header.password;

Admin.findOne({username:username,password:password}).then(function (response){
    if(response){
        next()
    }else{
        res.status(403).json({
            msg :"User dose'nt exists !!!"
        })
    } 
});

}

module.exports = adminMiddleware;