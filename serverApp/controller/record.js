const mongoose=require("mongoose");
const Record = require("../model/Record");


let recordController={
    postRecord:async(req,res,next)=>{
        try{
            let data={
            employ_id:new mongoose.Types.ObjectId(req.body.employ_id),
            role:req.body.role,
            salary:req.body.salary,
            experience:req.body.experience,
            education:req.body.education,
            skills:req.body.skills,
            image:req.body.image
        },
            record=new Record(data);
            if(record)
            {
                await record.save();
                res.json(record);
                console.log(record);
            }else{
                res.status(500).send('record not fouund');
            }
        }catch(err){
            res.status(404).send(err.message);
        }
    },
    getAllRecords:async(req,res,next)=>{
        try {
            let records=await Record.find({});
            if(records){

                res.json(records);
                console.log(records);
            }else{
                res.status(404).send({message:'Record not found'});
            }
            
        } catch (error) {
            console.log(error.message);
        }
    }
}


module.exports=recordController;