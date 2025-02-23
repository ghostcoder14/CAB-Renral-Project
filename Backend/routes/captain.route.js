import { Router } from "express";
import registerCaptain from "../controllers/captain.controller.js";
import { body } from "express-validator";

const captainRouter = Router();


captainRouter.post('/registerCaptain' , [
    body('email')
    .isEmail()
    .withMessage('Invalid Email'),
    body('firstname')
    .isLength({min: 2})
    .withMessage('Firstname must be atleast 2 charcter'),
    body('lastname')
    .isLength({min: 3})
    .withMessage('Lastname must be atleast 3 charcter'),
    body('password')
    .isLength({min: 8})
    .withMessage('Password length must be 8 characters '),
    body('vehicle.color')
    .isLength({min: 3})
    .withMessage('vehicle-color must be atleast 3 charcter'), 
    body('vehicle.capacity')
    .isInt({min: 2})
    .withMessage('vehicle must have sitting of 2 including the driver'),
    body('vehicle.plate')
    .isLength({min :3})
    .withMessage('vehicle-plate must be atleast 3 character'),
    body('vehicle.vehicleType')
    .isIn(['car', 'motorcycle' , 'auto'])
    .withMessage('Invalid vehicle type')

], registerCaptain)



 export default captainRouter 