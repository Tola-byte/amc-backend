import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const MONGO_URL = process.env.MONGO_DB_URI


export const connectDatabase = () => {
    mongoose
        .connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log('Database connected')
        })
        .catch((err) => {
            console.error('Failed to connect to MongoDB', err)
        })
}
