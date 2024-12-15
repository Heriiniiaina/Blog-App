import { config } from "dotenv"
import express from "express"
import cors from "cors"
import { errorMiddleware } from "./middlewares/errorHandler.js"
const app = express()
config()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())






app.use(errorMiddleware)
export default app