const express=require('express');
const resetPassword=require('../../controller/reset');
const router=express.Router();

// console.log("data---------")
router.post('/',resetPassword.postReset);

module.exports=router;