import { captainModel } from "../Models/captain.model.js"
import jwt from 'jsonwebtoken'
import { TokenSchema } from "../Models/blacklistToken.model.js";



export const CaptainMiddleWare_Auth = async(req, res, next) => {
    const token = req.cookies.token || (req.headers.authorization && req.headers.authorization.split(" ")[1]);

    if(!token){
        return resizeBy.status(401).json({message: 'Unauthorized Captain'})
    }

    const isBlacklisted = await TokenSchema.findOne({token: token})

    if(isBlacklisted){
        return resizeBy.status(401).json({message: 'Unauthorized Captain'})
    }

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        const Captain = await captainModel.findById(decode._id)
        if (!Captain) {
            return res.status(404).json({ message: "User not found" });
        }
        req.Captain = Captain
        req.Captain = Captain;
        next();
    } catch (error) {
        console.log("CaptainAuthMiddleware error");
        return res.status(401).json({ message: "Unauthorized - Invalid Token" });
    }
}