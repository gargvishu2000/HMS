import mongoose from "mongoose";
import bcrypt from "bcrypt"

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String, enum: ["patient", "doctor"]
    },
    mobile: { type:Number, required:true},
    mobileVerified: {type:Boolean, default:false},
    otp:{type:Number},
    otpVerified:{type:Boolean, default:false},
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: { type:Date, default:Date.now() }
})

userSchema.pre('save', async function(next){
    if(!this.isModified("password")) return next(); //if already modified.

    try {
    
        this.password = await bcrypt.hash(this.password,10)
        next()
    } catch (err) {
        next(err)
    }
})

const User = mongoose.model('User', userSchema);
export default User
