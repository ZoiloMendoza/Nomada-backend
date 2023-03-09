import mongoose from "mongoose"
import logger from "../api/middlewares/logger"

const {
    DB_USERNAME,
    DB_PASSWORD,
    DB_HOSTNAME,
    DB_NAME 
} = process.env 

const uri = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}/${DB_NAME}?retryWrites=true&w=majority`

export const connectToDataBase = async () => {
    try {
        await mongoose.ser("strictQuery", false).connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        logger.info("Database connection established successfully")
    } catch (error) {
        logger.error("Error connecting to database", error)
      }   
    }