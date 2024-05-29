const express=require('express');
const dotenv=require('dotenv');
const connectDB=require('./config/db.js');
const userRoute=require('./userRoute.js');

dotenv.config({path:`../c.env`});
connectDB();
const app=express();
app.use(express.json());

app.use('/api/user',userRoute);

const PORT=process.env.PORT||8000;

const server=app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});
