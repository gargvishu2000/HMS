import User from "../models/user.schema.js";

export const signUp = async(req,res)=>{
    console.log(req.body);
    
    const {username,email,password,type,mobile} = req.body;
    const newUser = User({username,email,password,type,mobile});
    try {
        await newUser.save();
        return res.status(201).json({message: "User Created Successfully"})
    } catch (error) {
        return res.status(400).json({message:"Error Creating User"})
    }
}



