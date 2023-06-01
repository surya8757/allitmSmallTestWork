const express=require('express');
const  userController=require('../../controller/user');
const router=express.Router();

//@route get  api/user
//desc user api route
//@access public routes

router.get('/',userController.getAllUsers);
router.post('/',userController.postUsers);
router.delete('/',userController.deleteUser);
router.get('/:dataType',userController.exportData);


module.exports=router;


