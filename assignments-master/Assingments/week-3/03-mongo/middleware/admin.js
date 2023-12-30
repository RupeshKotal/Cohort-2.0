const {Admin} = require("../db/index");

async function adminMiddleware(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;

 const response  = await  Admin.findOne({
        username:username,
        password:password
    })

    if(response){
        next()
    }else{
        res.status(403).json({
            msg: "User doest exists"
        })
    }
}

module.exports= adminMiddleware;