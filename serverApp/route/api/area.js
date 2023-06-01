const express=require('express');
const router=express.Router();
const areaContoller=require('../../controller/area');



router.get('/',areaContoller.getAllArea);


module.exports=router;