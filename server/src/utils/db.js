import mongoose from "mongoose";
export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Database connected`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}