// dotenv config
const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const path=require('path');

dotenv.config();


  
connectDB();
// rest of your code


const app = express();

// middleware
app.use(express.json());
app.use(morgan('dev'));

// routes


 
app.use('/api/v1/user',require("./routes/userRoutes"));
app.use("/api/v1/admin",require("./routes/adminRoutes"));
app.use("/api/v1/doctor",require("./routes/doctorRoutes"));

//static files
app.use(express.static(path.join(__dirname,'./clien/build')))

app.get('*',function(req,res){
   res.sendFile(path.join(__dirname,'./client/build/index.html'));
});

// listen
const port = process.env.PORT || 8000
app.listen(port,()=>{console.log(`server starting  ${port}`)})
