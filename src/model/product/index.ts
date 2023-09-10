import { Schema, model,Mongoose } from "mongoose";
interface Product {
  name: String;
  description: String;
  price: Number;
  quantity: Number;
  warehouse: any

}

const productSchema = new Schema<Product>(
  {
    name: String,
    description: String,
    price: Number,
    quantity: Number,
    warehouse: { type: Mongoose.Schema.Types.ObjectId, ref: "Warehouse" },
  },
  { timestamps: true }
);


export const productModel = model<Product>("product", productSchema);




