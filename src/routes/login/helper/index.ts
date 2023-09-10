import jwt from "jsonwebtoken";
import { config } from "../../../utils/config";

const { jwtSecretKey }: any = config;

export const jwtTokenGenerate = (data: object) => {
    //console.log(jwtSecretKey);
    try {
        const token = jwt.sign({
            data
        }, jwtSecretKey, { expiresIn: '8h' });
        return token;
    } catch (error) {
        return false;
    }
}