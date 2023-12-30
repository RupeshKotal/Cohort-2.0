// Middleware for handling auth
const {Admin} = require("../db/index")


function adminMiddleware (req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const username = req.headers.username;
    const password = req.headers.password;


    Admin.findOne({ 
        username:username,
        password : password
    }).then(function(response){
        if(response){
            next()
        }else{
            res.status(403).json({
                        msg :"User dose'nt exists !!!"
                    }) 
        }
    })
               

//   const response =  await Admin.findOne(
//     {username: username,
//         password: password}
//     );

//   if(response){
//     // res.json({
//     //     msg:"user exists"

//     // })
//     next()
//   }else{
//     res.status(403).json({
//         msg :"User dose'nt exists !!!"
//     })
//   }


// Admin.findOne({username:username,password:password}).then(function (response){
//     if(response){
//         // next()
//         res.json({
//             msg: "user exists"
//         })
//     }else{
//         res.status(403).json({
//             msg :"User dose'nt exists !!!"
//         })
//     } 
// })

// }
}

module.exports = adminMiddleware;