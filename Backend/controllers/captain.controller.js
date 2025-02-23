import { createCaptain } from "../Services/captain.service.js";
import { captainModel } from "../Models/captain.model.js";
import { validationResult } from "express-validator";


const registerCaptain = async(req, res) => {
    console.log("Captain Controller called");
    
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const { firstname,lastname, email, password , vehicle} = req.body

    const isCaptainExisted = await captainModel.findOne({email})
    if(isCaptainExisted){
      return  res.status(400).json({message: 'Captain allready Exist'})
    }

     const hashedPassword = await captainModel.hashPassword(password)
   
    const captain = await createCaptain({
        firstname,
        lastname,
        email,
        password: hashedPassword,
        vehicleType:vehicle.vehicleType,
        plate:vehicle.plate,
        color:vehicle.color,
        capacity:vehicle.capacity
    })

    const token =  captain.generateAuthToken();
    return res.status(201).json({token , captain})

}

export default registerCaptain