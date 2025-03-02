import { Router } from "express";
import { registerCaptain, loginCaptain, profileCaptain, logoutCaptain } from "../controllers/captain.controller.js";
import { body } from "express-validator";
import { CaptainMiddleWare_Auth } from "../middleware/captainAuth.middleware.js";


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
    .isIn(['Car', 'Motorbike' , 'Auto'])
    .withMessage('Invalid vehicle type')

], registerCaptain)

captainRouter.post('/login',[
    body('email')
    .isLength({min: 3})
    .withMessage('Invalid Email'),
    body('password')
    .isLength({min: 8})
    .withMessage('Invalid Password')
],  loginCaptain)


captainRouter.get('/profile', CaptainMiddleWare_Auth, profileCaptain)

captainRouter.get('/logout', CaptainMiddleWare_Auth, logoutCaptain )

 export default captainRouter 