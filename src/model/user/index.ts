import { Schema, model } from "mongoose";
interface IUser {
    firstname: String,
    lastname: String,
    email: { type: String, unique: true },
    phone: { type: String, unique: true },
    password: String,
    approved: { type: Boolean, default: false },
    blocked: { type: Boolean, default: false },
}
const userSchema = new Schema<IUser>({
    firstname: String,
    lastname: String,
    email: { type: String, unique: true },
    phone: { type: String, unique: true },
    password: String,
    approved: { type: Boolean, default: false },
    blocked: { type: Boolean, default: false },

}, { timestamps: true });

export const userModel = model<IUser>("users", userSchema);
