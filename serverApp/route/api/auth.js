const express=require('express');
const router=express.Router();
const  loginController=require('../../controller/auth');



router.post('/',loginController.login);


module.exports=router;