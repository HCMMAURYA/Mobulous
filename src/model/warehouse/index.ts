import { Schema, model} from "mongoose";

interface Warehouse {
  name: String;
  location: String;
}

const WarehouseSchema = new Schema<Warehouse>(
  {
    name: String,
    location: String,
  },
  { timestamps: true }
);
WarehouseSchema.index({ title: 1, description: 1 });

export const WarehouseModel = model<Warehouse>("whereHouse", WarehouseSchema);
