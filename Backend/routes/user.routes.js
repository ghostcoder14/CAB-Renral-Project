import { Router } from 'express'
const router = Router()
import { body } from 'express-validator';
import { registerUser } from '../controllers/user.controller.js';


router.post('/register', [
    body('email')
      .isEmail()
      .withMessage('Invalid Email'),
    body('firstname')
      .isLength({min: 3 })
      .withMessage ('First Name must be at Least 3 characters long'),
    body('password')
      .isLength({min: 8})
      .withMessage('Password must be at 8 character long')
], 
registerUser
)


export default router 