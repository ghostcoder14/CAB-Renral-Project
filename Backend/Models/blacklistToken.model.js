import mongoose  from "mongoose";

const blackListingTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true 
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 86400 //24hr
    }
});

export const TokenSchema = mongoose.model('TokenSchema', blackListingTokenSchema)