const User = require("../model/User");
const bcrypt = require('bcrypt');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const userController={
    getAllUsers:async(req,res)=>{
        try{
            const users=await User.find({});
            if(!users)
            {
                res.status(404).send({message:'No users found'});
            }else{
                res.json({
                    users:users
                })
            }
        }catch(e){
            res.status(404).send({message:"User not found",status:"error"});
        }
    },
    postUsers:async(req,res)=>{
       try{
        const userData=new User({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            password:req.body.password
        })
        const salt=bcrypt.genSaltSync(13);
       const hash= await bcrypt.hash(userData.password,salt);
       userData.password=hash;
       res.send(userData);
      await userData.save();
       }catch(err){
        res.status(500).send({message:err.message});
       }
    },
    deleteUser:async(req,res)=>{
        try {
            await User.deleteMany({});
            res.status(200).send({message:"user deleted successfully"})
        } catch (error) {
            res.status(500).send({message:"error deleting user"});
        }
    },
    exportData: async function (req, res) {
        let data = {};
        let dataType = Number(req.params.dataType)
        let collection;
        switch (dataType) {
          case 1:
            collection=User;
            userController.mangePlanCSV(req,res);
          default:
          // code block
        }
    },

  mangePlanCSV:async function(req,res){
    let tempArray=[];
    let dbData=await User.aggregate([
        {
        "$project":{
            "_id":1,
            "name":1,
            "email":1,
            "phone":1
        }
        }
        ]
            )

    dbData.forEach(elem => {
      let userData = {}
      userData.user_Id = elem._id;
      userData.userName= elem.name;
      userData.userEmail=elem.email;
      userData.userPhone=elem.phone;
      tempArray.push(userData)
    })
   // console.log("surya",tempArray)
    const csvWriter = createCsvWriter({
      
        path: '/home/mohit/Desktop/file.csv',
      header: [
        { id: 'user_Id ', title: 'userID' },
        { id: 'userName', title: 'userName' },
        { id: 'userEmail', title: 'userEmail' },
        { id: 'userPhone', title: 'userPhone' },
      ]
    });
    // console.log("path---"+env.logFilePath + 'user.csv'


    csvWriter
      .writeRecords(tempArray)
      .then((err, result) => {
        if (err) {
          console.log(err)
          res.send({
            'success': false,
            'filepath': '',
            'message': err.message
          });
        } else {
          console.log('ManagerPlan data download process is completed');
          res.send({
            'success': true,
            'filepath': '/home/mohit/Deskto/file.csv'
          });
        }
      })
      .catch(err => {
        console.log(err)
          res.send({
            'success': false,
            'filepath': '',
            'message': err.message
          });
      }); 

  },
}


module.exports=userController;