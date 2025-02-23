import { captainModel } from "../Models/captain.model.js";

export const createCaptain = async({firstname , lastname= '', email , password , color , plate , capacity , vehicleType }) => {
   
   
   try {
   
    if (!firstname || !email || !password || !color || !plate || !capacity || !vehicleType) {
        throw new Error('All fields are required');
    }
 
    const captain = await captainModel.create({
        firstname,
        lastname,
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType
        }
    });
     return captain 
   } catch (error) {
      console.error("Error creating captain:" , error.message)
      throw new Error("Failed to create Captain")
   }
}