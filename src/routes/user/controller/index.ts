import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { jwtTokenGenerate } from "../../login/helper";
import { createPassword, newUserPasswordEmail } from "../helper";
import { userModel } from "../../../model";
import { config } from "../../../utils/config";
import jwt from "jsonwebtoken";

const { jwtSecretKey }: any = config;
export const userCreate = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, phoneNumber } = req.body;
    const randomPassword = createPassword();

    const data = {
      firstName,
      lastName,
      email,
      phoneNumber,
      isAdmin: "false",
      password: await bcrypt.hash(randomPassword, 10),
    };
    const userChecker = await userModel.find({ email });
    if (userChecker.length >= 1) {
      res.status(200).json({
        message: "user already exist",
        flag: "flag1",
        status: 200,
      });
    } else {
      await userModel.create(data);
      await newUserPasswordEmail(email, randomPassword, firstName, "new");
      res.status(200).json({
        message: "new user created",
        flag: "flag2",
        status: 200,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(200).json({
      message: "flag0",
      status: 500,
    });
  }
};





export const adminAccess = async (req: Request, res: Response) => {
    try {
        const { action } = req.body;
        const { userId } = req.params;
        const user = await userModel.findById(userId);
    
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
    
        if (action === 'approve') {
          user.approved = true;
        } else if (action === 'reject') {
          user.approved = false;
        } else if (action === 'block') {
          user.blocked = true;
        } else if (action === 'unblock') {
          user.blocked = false;
        } else if (action === 'delete') {
          await User.findByIdAndDelete(userId);
          return res.status(200).json({ message: 'User deleted successfully' });
        } else {
          return res.status(400).json({ error: 'Invalid action' });
        }
    
        await user.save();
        res.status(200).json({ message: `User ${action}ed successfully` });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
  };











export const getAllUser = async (req: Request, res: Response) => {
  try {
    const data = await userModel
      .find({})
      .select("firstName lastName email phoneNumber");
    res.status(200).json({
      data,
      flag: "flag1",
      status: 200,
    });
  } catch (error) {
    console.log(error);
    res.status(200).json({
      message: "flag0",
      status: 500,
    });
  }
};
export const userDelete = async (req: Request, res: Response) => {
  try {
    const { _id } = req.body;
    await userModel.findOneAndRemove({ _id });
    res.status(200).json({
      flag: "flag1",
      status: 200,
    });
  } catch (error) {
    console.log(error);
    res.status(200).json({
      message: "flag0",
      status: 500,
    });
  }
};







