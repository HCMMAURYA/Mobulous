import mongoose from "mongoose";
import { config } from "../config";

const { dburl }: any = config;
export const connectDb = async () => {
    try {
        mongoose.connect(dburl);
        console.log("db connected successfully !");
    } catch (error) {
        console.log("db is not connected !");
    }
} 