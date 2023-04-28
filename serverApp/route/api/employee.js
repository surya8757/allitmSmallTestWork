const express=require('express');
const employeeController=require('../../controller/employee');
const router=express.Router();
const auth=require("../../middleware/auth");

//@route get  api/user/
//@param {String} params Paramerters
//desc user api route
//@access public routes

router.get('/',employeeController.getAllEmployee);
router.post('/', employeeController.postEmployee);
router.put('/:id',employeeController.updateEmployee);
router.delete('/:id',employeeController.deleteEmployee);
// router.get('/getAll',employeeController.getAllMerge);


module.exports=router;


