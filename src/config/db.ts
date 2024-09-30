import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(String(process.env.MONGO_URI));

        console.log("connecte avec success")
    } catch (error: any) {
        console.error(`Error: ${error?.message}`);
        process.exit(1);
    }
}