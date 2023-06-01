const Employee = require("../model/Employee");


let mergeController={
    getAllMerge:async(req,res)=>{
        try{
            // let employee=await Employee.find({});
            // let records=await Record.find({});
            let mergeData=await Employee.aggregate( [
              {
                $lookup:
                  {
                    from:"records",
                    localField:"_id",
                    foreignField:"employ_id",
                    as: "collections"
                  }
             }
           ] )
           let employee=new Employee();
           employee.mergeData.save();
             res.json(mergeData);
             console.log(mergeData);
        }catch(err){
            console.log(err.message);
        }

    }
}


module.exports=mergeController;