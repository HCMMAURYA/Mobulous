import { Request, Response } from "express";

export const userCredValdation = (req: Request, res: Response, next: Function) => {
    try {
        const { email, password } = req.body;
        if (email && password) {
            next();
        } else {
            res.status(200).json({
                status: 404,
                message: "flag0"
            });
        }
    } catch (error) {
        res.status(200).json({
            status: 404,
            message: "flag3"
        });
    }
}