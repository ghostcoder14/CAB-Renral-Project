import { Router } from 'express'
const router = Router()
import { body } from 'express-validator';
import { getUserProfile, registerUser } from '../controllers/user.controller.js';
import { LoginUser } from '../controllers/user.controller.js';
import { authUser } from '../middleware/auth.middleware.js';


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

router.post('/login',[
     body('email')
     .isEmail()
     .withMessage('Invalid Email'),
     body('password')
     .isLength({min: 8})
     .withMessage('Password Lenght must be atlesat 8')
],
LoginUser 
)

router.get('/profile', authUser, getUserProfile)


export default router 