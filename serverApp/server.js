const express=require('express');
const cors=require('cors');
const app=express();
// const fs=require('fs');
const path=require('path');
const Employee=require('./model/Employee');
const PORT=process.env.PORT || 5000;
const connectDB=require('./config/db');
connectDB();

//user middleware 
express.static(path.join(__dirname,'public'));
app.use(express.json({extends:false}))

//public file import
app.get('/index.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/index.html'));
})

app.get('/',(req,res)=>{
    res.send('App is running');
})


//user routers
app.use(cors());
app.use('/api/employee',require('./route/api/employee'));
app.use('/api/records',require('./route/api/record'));
app.use('/api/merge',require('./route/api/merge'));
app.use('/api/users',require('./route/api/user'));
app.use('/api/auth',require('./route/api/auth'));
app.use('/api/resetpassword',require('./route/api/reset'));
app.use('/api/area',require('./route/api/area'));
app.use('/api/login',require('./route/api/data'));



//server listening on
app.listen(PORT,(req,res)=>{
    console.log(`server listening on ${PORT}`);
})