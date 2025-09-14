import { Prisma } from "../../config/db"


export const S_createUser = async (payload: any)=>{
    console.log({payload})

    const result = await Prisma.user.create({
        data:payload
    })

    return result


}