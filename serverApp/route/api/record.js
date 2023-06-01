const express=require('express');
const  recordController=require('../../controller/record');
const auth=require("../../middleware/auth");
const router=express.Router();

//@route get  api/user
//desc user api route
//@access public routes

router.post('/', recordController.postRecord);
router.get('/',auth,recordController.getAllRecords);



module.exports=router;

