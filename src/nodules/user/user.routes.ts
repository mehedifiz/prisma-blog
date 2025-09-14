import  Express  from "express"
import { createUser } from "./user.controller"
const router = Express.Router()


router.post('/' , createUser)


export const userRouter = router;