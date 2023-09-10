import { Request, Response } from "express";

export const healthChecker = (req: Request, res: Response) => {
    
    res.status(200).json({
        message:"health ok onkar",
    }); 
}
