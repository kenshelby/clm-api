import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const connectToDb = async () => {
    
    try {
        const conn = await mongoose.connect(process.env.DB_URL);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

export default connectToDb;