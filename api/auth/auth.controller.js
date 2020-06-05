import Joi from '@hapi/joi'
import bcryptjs from "bcryptjs"
import {
    createControllerProxy
} from '../helpers/controllerProxy'
import {
    UserModel
}

from '../users/users.model'

class AuthController {

    async signUp(req, res, next) {

        console.log('AAAAAAAAAAAAAA', )

        try {


            const {
                userName,
                email,
                password
            } = req.body
            const existUser = await UserModel.findByEmail(email)
            if (existUser) {
                throw new Error
            }
            const passwordHash = await this.createHash(password)

            const newUser = await UserModel.create({
                userName,
                email,
                passwordHash
            })
            return res.status(201).json({
                id: newUser._id,
                userName: newUser.userName,
                email: newUser.email,

            })


            //1 Validate body
            //2 check unique email 
            //if3 true-thrue 409 error
            //create pass hash
            //save user to db
            //send succkess responce
        } catch (err) {
            next(err)
        }

    }

    validateSignUp(req, res, next) {
        console.log('sadfasf')
        const newuserSchemaParams = Joi.object({
            userName: Joi.string().required(),
            email: Joi.string().required(),
            password: Joi.string().required(),

        })


        const validationResult = newuserSchemaParams.validate(req.body)
        if (validationResult.error) {
            return res.status(404).json(validationResult.error)
        }
        next()


    }
    async createHash(password) {
        console.log('password', password)
        const
            BCRYPT_SALT = +process.env.BCRYPT_SALT
        return await bcryptjs.hash(password, BCRYPT_SALT)

    }
    /////////////////////////////////////////////////////////////////////////////////////SIGN IN
    validateSignIn(req,res,next){

        const signInSchema=Joi.object({
            email:Joi.string().required(),
            password:Joi.string().required(),
        })
        const validationResult = signInSchema .validate(req.body)
        if (validationResult.error) {
            return res.status(404).json(validationResult.error)
        }
        next()

    }
async signIn(req,res,next){
    try{
        //1 validate request bodu
        //2 find user by email
        //3 if no user-401 error
        //4 compare password with DB
        //5 if failed-401
        //6  generate auth token
        //7 save token for user
        //8 save  to cookies 
        //send sucsee responce
        const {email,password}=req.body;
        const user=await UserModel.findByEmail(email)
        if(!user){
         throw new Error
        }

    }
    catch(err){
    next(err)
    }
}

}
export const authController = createControllerProxy(new AuthController())