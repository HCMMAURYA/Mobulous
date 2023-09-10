import { Request, Response } from "express"
import jwt from 'jsonwebtoken'

export const authenticateAdmin =(req: Request, res: Response, next: Function) =>{
    const token = req.header('Authorization');
  
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  
    jwt.verify(token, 'your-secret-key', (err, decoded:any) => {
      if (err) {
        return res.status(401).json({ error: 'Invalid token' });
      }
      if (decoded.username === 'admin') {
        next();
      } else {
        return res.status(401).json({ error: 'Unauthorized' });
      }
    });
  }