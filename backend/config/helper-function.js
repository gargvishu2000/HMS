import nodemailer from "nodemailer";
import {transporter} from "./nodemailer.js"

export const sendEmail = async(email,subject,text)=>{
    const info = await transporter.sendMail({
        from: 'gargvishu2000@gmail.com',
        to: email,
        subject: subject,
        text: text,
})
}