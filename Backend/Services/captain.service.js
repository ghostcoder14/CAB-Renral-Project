import { captainModel } from "../Models/captain.model.js";

export const createCaptain = async ({ firstname, lastname = '', email, password, vehicle }) => {
    try {
       
        if (!firstname || !email || !password || !vehicle || !vehicle.color || !vehicle.plate || !vehicle.capacity || !vehicle.vehicleType) {
            throw new Error('All fields are required');
        }

       
        const captain = await captainModel.create({
            firstname,
            lastname,
            email,
            password,
            vehicle: {
                color: vehicle.color,
                plate: vehicle.plate,
                capacity: vehicle.capacity,
                vehicleType: vehicle.vehicleType
            }
        });

        return captain;
    } catch (error) {
        console.error("Error creating captain:", error.message);
        throw new Error("Failed to create Captain");
    }
};