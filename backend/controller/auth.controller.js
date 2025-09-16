import User from "../models/user.schema.js";
import jwt from "jsonwebtoken"

export const signUp = async(req,res)=>{
    
    const {username,email,password,type,mobile} = req.body;
    const newUser = User({username,email,password,type,mobile});
    try {
        await newUser.save();
        return res.status(201).json({message: "User Created Successfully"})
    } catch (error) {
        return res.status(400).json({message:error})
    }
}

export const signIn = async(req,res)=>{
    const {email,password} = req.body;
    const user = User.findOne({email});
    if(!user){
        return res.status(400).json({error: "No user found with this Email ID" })
    }
    const storedPassword = user.password;
    const isValidPassword = await bcrypt.compare(storedPassword,password);

    if(!isValidPassword){
        return res.status(400).json({error:"Credentials Invalid"})
    }else{
        const token = jwt.sign({email:user.email,password:user.password}, JWT_SECRET,{expiresIn:'1h'})
        res.cookie(token)
        return res.status(201).json({message:"Login successful."})
    }
}



