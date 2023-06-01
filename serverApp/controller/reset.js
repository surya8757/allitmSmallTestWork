const User = require("../model/User");
const bcrypt=require("bcrypt");

const resetPassword={
    postReset:async(req,res)=>{
        try{
            const {email}=req.body;
            const user=await User.findOne({email:email});
            if(!user){
                return res.status(404).json({message:"User not found"});
            }else{
                
                const {password}=req.body;
                user.password=password;
                const saltRound=bcrypt.genSaltSync(13);
                user.password=bcrypt.hashSync(user.password,saltRound);
                await user.save();
                return res.status(200).json({message:"Password changed"});
            }
        }catch(e){
            console.log(e);
        }
    }
}

module.exports=resetPassword;