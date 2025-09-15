import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLenght: 3,
        maxLength: 50
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

const User = mongoose.model('User', userSchema);
export default User
