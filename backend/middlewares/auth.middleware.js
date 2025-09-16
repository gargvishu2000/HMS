import User from "../models/user.schema.js";
import jwt from "jsonwebtoken"

const checkAuth = (req,res,next)=>{

const token = req.cookies.token
if(!token){
    return res.status(400).json({error:"You have been logged out!"})
}
jwt.verify(token, JWT_SECRET, async (err,decode)=>{
    if(err){
        return res.status(400).json({error:"Forbidden"})
    }
    const email=decode.email;
    const pass = decode.password;

    const user =await User.findOne({email})
    if(!user){
        return res.status(404).json("This is an invalid token")
    }
    if(pass!== user.password){
        return res.status(404).json("This is an invalid token")
    }
    req.user = user;
    next()
})
}

export default checkAuth