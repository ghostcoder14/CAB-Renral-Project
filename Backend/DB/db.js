import mongoose from "mongoose";
import dotenv from "dotenv"
import { DB_NAME } from "../constants.js";

dotenv.config();

const connectDB = async() => {

    try {
        if(!process.env.MONGODB_URI){
            throw new Error("MongoDB connection failed")
        }
        const connectionInstance =    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDb Connected Successfully: ${connectionInstance.connection.host}` );
     } catch (error) {
        console.error("MongoDB error:", error);
        process.exit(1)
        
     }
}

export default connectDB ;
