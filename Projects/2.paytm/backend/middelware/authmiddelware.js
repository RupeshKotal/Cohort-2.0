const jwt = require('jsonwebtoken');
const {secret} = require('../config')

const authmiddalWare = async (req,res,next) =>{
  const authorization = req.headers.authorization;

  if(!authorization || !authorization.startsWith("Bearer ")){
    res.status(403).json({
        msg : "Invalid token request"
    })
  }

  const Split = authorization.split(' ')
  const token = Split[1];

  try {
    const decode = jwt.verify(token,secret)

    if(decode){

        //*** */ If the verification is successful, it sets the userId property in the request object to the user ID extracted from the decoded token.
        req.middeluserId = decode.userid;

      

       next()
    }else(

        res.json({
            msg :"error in request"
        })
    )
  } catch (error) {
    console.log("Authmiddelware errror =>  ",error)
  }

}

module.exports={
    authmiddalWare
}