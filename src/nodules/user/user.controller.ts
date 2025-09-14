import { Request, Response } from "express";
import { S_createUser } from "./user.services";


export const createUser = async (req :Request ,res :Response)=>{

    try {

        const result = await S_createUser(req.body)

        console.log("created user" , result) 
        res.send(result)
        
    } catch (error) {
        console.log("error" , error

        )
    }

}