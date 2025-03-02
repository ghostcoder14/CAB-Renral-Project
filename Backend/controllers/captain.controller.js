import { createCaptain } from "../Services/captain.service.js";
import { captainModel } from "../Models/captain.model.js";
import { validationResult } from "express-validator";
import { TokenSchema } from "../Models/blacklistToken.model.js";


export const registerCaptain = async (req, res) => {
  console.log("Captain Controller called");
  console.log(req.body);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
  }

  try {
      const { firstname, lastname, email, password, vehicle } = req.body;

      // Validate required fields
      if (!firstname || !lastname || !email || !password || !vehicle || !vehicle.vehicleType || !vehicle.plate || !vehicle.color || !vehicle.capacity) {
          return res.status(400).json({ message: "All fields are required" });
      }

      // Check if captain already exists
      const isCaptainExisted = await captainModel.findOne({ email });
      if (isCaptainExisted) {
          return res.status(400).json({ message: 'Captain already exists' });
      }

      // Hash the password
      const hashedPassword = await captainModel.hashPassword(password);

      // Create the captain
      const captain = await createCaptain({
          firstname,
          lastname,
          email,
          password: hashedPassword,
          vehicle // Pass the entire vehicle object
      });

      // Generate token
      const token = captain.generateAuthToken();
      return res.status(201).json({ token, captain });
  } catch (error) {
      console.log("Error Registering in the Captain:", error.message);
      return res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

export const loginCaptain = async(req, res, next) =>{
    console.log("Login Captain Called");
    
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(401).json({errors: errors.array()})
    }

    try {
        const {email, password} = req.body
        if(!(email || password)){
            throw new Error("Email and psssword is required")
           }
    
           const Captain = await captainModel.findOne({email}).select('+password')
    
           if(!Captain){
            return res.status(401).json({message: 'invalid Email or password'});
           }else{
            console.log("Captain Logged in Succesfully")
           }
    
         const isMatch = await Captain.comparePassword(password)
    
         if(!isMatch){
            return res.status(401).json({message: 'Invalid Email and Password'})
         }
    
         const token = Captain.generateAuthToken();
    
         res.cookie('token', token)
    
         res.status(200).json({token, Captain})
    } catch (error) {
        console.error("Error logging in captain:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export const profileCaptain = async(req, res, next) => {
    return res.status(200).json({Captain: req.Captain})
}

export const logoutCaptain = async(req, res, next) => {
  try {
    const token = req.cookies.token || (req.headers?.authorization && req.headers.authorization?.split(' ')[ 1 ])
    if (!token) {
      return res.status(400).json({ message: 'No token provided' });
  }
    res.clearCookie('token')
    await TokenSchema.create({token})
     return res.status(500).json({message: 'Logged Out'})
  } catch (error) {
    console.log("Error in logout Controller")
    console.error("The logoutCaptain error is:", error);
    
  }
}