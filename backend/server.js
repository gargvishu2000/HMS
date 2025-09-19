import dotenv from "dotenv"
dotenv.config()

import express from 'express';
import connectDB from './config/mongoose.js';
import { signIn, signUp,logOut } from "./controller/auth.controller.js";
import bodyParser from "body-parser"
import cookieParser from "cookie-parser";
import checkAuth from "./middlewares/auth.middleware.js";

const app=express();
connectDB()
app.use(express.json())
app.use(cookieParser())

app.post('/api/signup', signUp);
app.post('/api/signin', signIn);
app.get('/api/logout', logOut)

app.get('/',checkAuth, (req,res)=>{
    console.log("HMS");
})

app.listen(3000, ()=>{
    console.log("server is running on server 3000"); 
})