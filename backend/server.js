import dotenv from "dotenv"
dotenv.config()

import express from 'express';
import connectDB from './config/mongoose.js';
import { signUp } from "./controller/auth.controller.js";
import bodyParser from "body-parser"

const app=express();
connectDB()
app.use(express.json())

app.post('/api/signup', signUp);

app.get('/', ()=>{
    console.log("HMS");
})

app.listen(3000, ()=>{
    console.log("server is running on server 3000"); 
})