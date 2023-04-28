const jwtTokenKey=require("../config/key.json").jwtTokenKey;
var jwt = require('jsonwebtoken');

module.exports=(req,res,next)=>{
    var token=req.headers('Authorization') || req.headers('auth-token');
    if(!token){
        res.status(401).send({message:"Invalid token"});
    }
    try{
        // console.log(token);
        // console.log(jwtTokenKey);
        const decoded= jwt.verify(token,jwtTokenKey);
       const user=decoded.user;
       res.send(user);
       next();
    }catch(err){
        res.status(401).send({message:"Error varifying token",err});
    }
}
