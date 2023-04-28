const User = require("../model/User");
const bcrypt=require("bcrypt");
const jwtTokenKey=require("../config/key.json").jwtTokenKey;
var jwt = require('jsonwebtoken');

const loginController={
    login:async(req,res)=>{
        try{
            const {email,password}=req.body;
            const user=await User.findOne({email});
            console.log(user);
            if(!user){
                return res.status(404).send({message:"login failed"});
            }else{
                const isMatch=await bcrypt.compare(password,user.password);
                if(isMatch){
                    const payload={
                        id:user.id,
                        name:user.name,
                        email:user.email,
                        phone:user.phone
                    }
                    const token=jwt.sign(payload,jwtTokenKey,{ expiresIn: 60*60*60*60});
                    res.status(200).json(token);
                }else{
                    return res.status(403).send({message:"invalid credentials"});
                }

            }
        }catch(err){
            res.status(500).send({message:"creadetial error"});
        }
    }
}

module.exports=loginController;