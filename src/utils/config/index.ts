import dotenv from 'dotenv';
dotenv.config();

export const config = {
    dburl: process.env.MONGODB_URL,
    jwtSecretKey: process.env.JWT_SECRET_KEY,
   
}