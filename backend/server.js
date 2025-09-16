import dotenv from "dotenv"
dotenv.config()

import express from 'express';
import connectDB from './config/mongoose.js';
import { signUp } from "./controller/auth.controller.js";
import bodyParser from "body-parser"
import cookieParser from "cookie-parser";
import checkAuth from "./middlewares/auth.middleware.js";

const app=express();
connectDB()
app.use(express.json())
app.use(cookieParser())

app.post('/api/signup', signUp);
// app.post('/api/signin', singIn);

app.get('/',checkAuth, (req,res)=>{
    console.log("HMS");
})

app.listen(3000, ()=>{
    console.log("server is running on server 3000"); 
})