import {createHmac} from "crypto"
import { config } from "dotenv"
config()

export const hashCode =  (value,key)=>{
    const hashedCode =  createHmac("sha256",key).update(value).digest("hex")
    return hashedCode
}