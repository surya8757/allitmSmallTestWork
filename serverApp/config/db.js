const mongoose=require('mongoose');
const config=require('config');
// const db=config.get('mongoURI');
// const db = 'mongodb://localhost:27017/users';
const db = 'mongodb://localhost:27017/users';

const connectDB=async()=>{
    try{
        await mongoose.connect(db,{
            useUnifiedTopology:true
        });
        console.log('Mongodb connected...');
    }catch(err){
        console.log(err.message);
        process.exit(1);
    }
};
module.exports=connectDB;