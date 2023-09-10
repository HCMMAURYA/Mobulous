import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const loginChecker = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    if (username === "admin" && password === "your-admin-password") {
      const token = jwt.sign({ username: "admin" }, "your-secret-key", {
        expiresIn: "1h",
      });
      return res.status(200).json({ token });
    } else {
      return res.status(401).json({ error: "Invalid admin credentials" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
