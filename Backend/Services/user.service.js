import { User } from "../Models/user.model.js";

const createUser = async ({ firstname, lastname, email, password }) => {
    try {
        if (!firstname || !email || !password) {
            throw new Error(" All fields are required");
        }
        // Ensure lastname is always a string (even if undefined)
        lastname = lastname || "";
        const user = await User.create({ 
        firstname,
        lastname,  
        email,
        password, 
        });
        return user;
    } catch (error) {
        console.error(" Error creating user:", error.message);
        throw new Error(error.message);
    }
};

export default createUser;
