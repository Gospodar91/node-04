import {
    Router
} from 'express'
import {
    authController
} from './auth.controller';
const router = Router()
router.post("/sign-up",
    authController.validateSignUp,
    authController.signUp);
    router.put('/sign-in',authController.signIn)
export const authRouter = router;