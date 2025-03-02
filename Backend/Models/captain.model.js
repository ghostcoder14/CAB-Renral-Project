import mongoose, { Schema } from "mongoose";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const captainSchema = new mongoose.Schema({
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
        minlength:[3, 'Email should be atleast 3 charcter'],
        lowercase: true, 
    },
    password:{
        type: String,
        required: true,
        select: false
    },
    socketId:{
        type: String
    },
    status:{
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    vehicle: {
        color:{
            type: String,
            required: true,
            minlength: [3, 'Colors must be three character long']
        },
        plate:{
            type: String,
            required: true,
            minlength: [3, 'Plate no must be at least 3 charctes long']
        },
        capacity:{
            type: Number ,
            required: true ,
            min: [1, 'Capacity must be atleast 1 person including the driver']
        },
        vehicleType:{
            type: String,
            required: true ,
            enum :[ 'Car', 'Motorbike', 'Auto'],
        }
    },
    location:{
        latitude:{
            type: Number,
        },
        longitude :{
            type: Number
        }
    }

})

captainSchema.methods.generateAuthToken = function () {

    const token = jwt.sign({
        _id: this._id,
    },process.env.JWT_SECRET,{
        expiresIn : '24h'
    } )
    return token ;
}

captainSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password , this.password)
}

captainSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password , 10)
}

export const captainModel = mongoose.model('captainModel', captainSchema)