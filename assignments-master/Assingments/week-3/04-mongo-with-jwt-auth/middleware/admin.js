// Middleware for handling auth
const jwt = require("jsonwebtoken");
const jwtpassword = require("../index")

function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const token =req.headers.authorization;
    const word = token.split(" ") //bearrer aaaasjndddj => [bearer,aaaasjn]
    const jwtToken = word[1];
   const decode = jwt.verify(jwtToken,jwtpassword);

   if(decode.username){
    next()
   }else{
    res.json({
        msg:"you are not authenticated"
    })
   }

}

module.exports = adminMiddleware;