const mongoose=require('mongoose');
const {Schema}=require('mongoose');

const recordSchema=new mongoose.Schema({
    employ_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Employee',
    },
    role:{
        type:String
    },
    salary:{
        type:Number
    },
    expirences:{
        type:Number
    },
    education:{

        type:String
    },
    skills:{
        type:[String]
    },
    image:{
        data:Buffer,
        type:String
    },
    date:{
        type:Date,
        default:Date.now()
    }
})
const Record=mongoose.model('record',recordSchema);
module.exports=Record;
