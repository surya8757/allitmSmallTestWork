const mongoose=require("mongoose");
const Employee = require("../model/Employee");





// const db=require("../config/db");

//@route get  api/user
//desc user api route
//@access public routes

let employeeController = {
  getAllEmployee: async (req, res) => {
    try {
      let employee = await Employee.find({});
      if (!employee) {
        return res.status(404).send({ message: "employee not found" });
      } else {
        // JSON.stringify(employee);
        // res.json(employee);
        res.json(employee);
      }
    } catch (err) {
      console.log(err.message);
    }
  },
  postEmployee: async (req, res) => {
    try {
      let data = new Employee({
        firstName: req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:req.body.password,
        phone:req.body.phone,
      });
      await data.save();
      res.json(data);
      console.log("data send success..", data);
    } catch (err) {
      console.log(err.message);
    }
  },
  updateEmployee: async (req, res, next) => {
    try {
        var id = new mongoose.Types.ObjectId(req.params.id);
        let employee=await Employee.findOne({_id: id});
        var option={
            firstName: req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            password:req.body.password,
            phone:req.body.phone,
        };
        if(employee){
            // let employee1=await Employee.findOneAndUpdate({_id:id},{$set:option},{new:true});
            let employee1=await Employee.updateMany({},{$set:option},{ multi: true, upsert: false });
            if(!employee1){
                res.status(404).send({message:"No such employee found"});
            }else{
                res.json(employee1);
                console.log(employee1);
            }
        }
    } catch (error) {
        res.status(404).send({message:error.message});
    }
  },
  deleteEmployee:async(req,res,next)=>{
    try {
        // var id = new mongoose.Types.ObjectId(req.params.id);
        // await Employee.findByIdAndDelete({_id:id});
        await Employee.deleteMany({});
        res.status(200).send({message:'successfully deleted employee'});
    } catch (error) {
        res.status(404).send({message:error.array});
    }
  }
};

module.exports = employeeController;
