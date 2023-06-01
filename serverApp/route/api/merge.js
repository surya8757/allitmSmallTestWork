const express=require('express');
const  mergeController=require('../../controller/merge');
const router=express.Router();

//@route get  api/user
//desc user api route
//@access public routes

router.get('/',mergeController.getAllMerge);


module.exports=router;