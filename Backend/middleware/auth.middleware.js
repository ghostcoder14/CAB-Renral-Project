import jwt from 'jsonwebtoken';
import { User } from '../Models/user.model.js';
import { TokenSchema } from '../Models/blacklistToken.model.js';


export const authUser = async (req, res, next) => {
    const token = req.cookies.token || (req.headers.authorization && req.headers.authorization.split(" ")[1]);


    if (!token) {
        return res.status(401).json({ message: 'Unauthorized - No Token Provided' });
    }

    const isBlacklisted = await TokenSchema.findOne({token: token})

        if(isBlacklisted){
            return res.status(401).json({message: 'Unauthorized '})
        }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded._id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error("Auth Middleware Error:", error.message);
        return res.status(401).json({ message: "Unauthorized - Invalid Token" });
    }
};


