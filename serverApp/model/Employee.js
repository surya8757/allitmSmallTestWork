const mongoose=require('mongoose');
const {Schema}=require('mongoose');
const employeeSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName:{
        type:String
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    phone:{
        type:Number
    }
})
const Employee=mongoose.model('employee',employeeSchema);
module.exports=Employee;