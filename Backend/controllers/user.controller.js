import { User } from "../Models/user.model.js"
import createUser from "../Services/user.service.js"
import { validationResult } from "express-validator"


export const registerUser = async (req, res, next) => {
    const errors = validationResult(req)
      if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
      }

      const { firstname, lastname, email, password } = req.body;

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