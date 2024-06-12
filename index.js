import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import route from "./routes/route.js";

const app = express();

// dotenv config

dotenv.config()


// cors setting

app.use(cors())
app.use(express.json())

//port name
const PORT = process.env.PORT || 8080;

//routes

app.use('/api', route)

//connection

app.listen(PORT, () => {
    console.log(`connected to backend at ${PORT} `)
})