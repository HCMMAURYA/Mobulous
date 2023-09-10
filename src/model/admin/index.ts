import { Schema, model } from "mongoose";
interface Admin {
  username: String;
  password: String;
}
const AdminSchema = new Schema<Admin>(
  {
    username: String,
    password: String,
  },
  { timestamps: true }
);
AdminSchema.index({ title: 1, description: 1 });

export const AdminModel = model<Admin>("admin", AdminSchema);
