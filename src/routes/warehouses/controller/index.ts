import { Request, Response } from "express";

import { WarehouseModel } from "../../../model";

export const wareHouse = async (req: Request, res: Response) => {
  try {
    const { name, location } = req.body;
    const warehouse = new WarehouseModel({ name, location });
    await warehouse.save();
    res.status(201).json({ message: "Warehouse created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


export const wareHouseGellAll = async (req: Request, res: Response) => {
  try {
    const warehouses = await WarehouseModel.find();
    res.status(200).json(warehouses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
