import { User } from "../Models/user.model.js"
import createUser from "../Services/user.service.js"
import { validationResult } from "express-validator"
import { TokenSchema } from "../Models/blacklistToken.model.js"


export const registerUser = async(req, res, next) => {
    const errors = validationResult(req)
      if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
      }

      const { firstname, lastname, email, password } = req.body;

      const isUserExisted = await User.findOne({email})
      if(isUserExisted){
        return res.status(400).json({message:'User allready exist'})
      }
      const hashedPassword = await User.hashPassword(password)

      const user = await createUser({
        firstname,
        lastname,
        email,
        password: hashedPassword 
      })

      const token = user.generateAuthToken();
      res.status(201).json({token , user})

      console.log(req.body)
      next()
}

export const LoginUser = async(req , res  ) => {
  const errors = validationResult(req)
  if(!errors.isEmpty){
    return res.status(400).json({errors: errors.array}) ;
  }
     const{email , password} = req.body;
     if(!(email || password)){
      throw new Error("Email and psssword is required")
     }

     const user = await User.findOne({email}).select("+password") ;

     if(!user){
      return res.status(401).json({message: 'invalid Email or password'});
     }else{
      console.log("User found successfully")
     }

     const isMatch = await user.comparePassword(password)

     if(!isMatch){
      return res.status(401).json({message: 'Invalid email or password'});
     }else{
      console.log("Logged in successfully")
     }
     const token =  user.generateAuthToken();
     res.cookie('token', token)
     res.status(200).json({token , user});
}

export const getUserProfile = async(req, res, next) => {
  res.status(200).json(req.user)
   next()
}

export const logoutUser = async (req, res) => {

  const token = req.cookies.token || (req.headers?.authorization && req.headers.authorization?.split(' ')[ 1 ])

  if (!token) {
    return res.status(400).json({ message: 'No token provided' });
}

  res.clearCookie('token');

  await TokenSchema.create({token})

 return res.status(200).json({message: 'Logged Out'})

}

