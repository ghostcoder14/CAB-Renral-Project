import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"


const userSchema = new mongoose.Schema({
  
       firstname :{
        type:String,
        required: true,
        minlength:[3, 'Firstname should be at least 3 charcter']
       },
       lastname:{
        type:String
       },
    
    email:{
        type:String,
        required: true ,
        unique:true,
        trim:true,
        minlength:[3, 'Email should be atleast 3 charcter']
    },
    password:{
        required: true ,
        type:String,
        minlength:[8, 'Email should be atleast 3 charcter'],
        select:false,
    },
    socketId:{
        type:String
    }
})

//Generate the access token
userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({
        _id: this._id 
    }, process.env.JWT_SECRET,{
        expiresIn: "10h"
    }
   )
   return token ;
}

//Compare the password with the hash one 
userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password , this.password)
}

//Hash the password
 userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10)
}


export const User  = mongoose.model("User" , userSchema); 
