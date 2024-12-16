import { config } from "dotenv"
import nodemailer from "nodemailer"
config()
export const transport = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.SENDING_EMAIL_ADRESS,
        pass:process.env.SENDING_EMAIL_PASS
    }
})