import { Request, Response } from "express";
import { productModel} from "../../../model";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, description, price, quantity, warehouse } = req.body;
    const product = new productModel({ name, description, price, quantity, warehouse });
    await product.save();
    res.status(201).json({ message: 'Product created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getproducts = async (req: Request, res: Response) => {
  try {
    const data = await productModel.find({});
    res.status(200).json({
      data,
      flag: "flag1",
      status: 200,
    });
  } catch (error) {
    //console.log(error)
    res.status(200).json({
      message: "flag0",
      status: 500,
    });
  }
};

export const productDelete = async (req: Request, res: Response) => {
  try {
    const { _id } = req.body;
    await productModel.findOneAndRemove({ _id });
    res.status(200).json({
      message: "flag1",
      status: 200,
    });
  } catch (error) {
    //  console.log(error)
    res.status(200).json({
      message: "flag0",
      status: 500,
    });
  }
};
export const updateProductById = async (req: Request, res: Response) => {
  try {
    const { quantity } = req.body;
    const { productId } = req.params;
    const product = await productModel.findById(productId);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    product.quantity = quantity;
    await product.save();
    res.status(200).json({ message: 'Product quantity updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

