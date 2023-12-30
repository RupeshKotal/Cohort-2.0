const jwt =require("jsonwebtoken");
const secret = require("../index")

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    const token =req.headers.authorization;
    const word = token.split(" ") //bearrer aaaasjndddj => [bearer,aaaasjn]
    const jwtToken = word[1];
   const decode = jwt.verify(jwtToken,secret);

   if(decode.username){
    next()
   }else{
    res.json({
        msg:"you are not authenticated"
    })
   }
}

module.exports = userMiddleware;