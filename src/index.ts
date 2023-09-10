import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import path from "path";
const app: Application = express();
import { connectDb } from "./utils/db";
connectDb();
import cors from "cors";
import healthCheckerRouter from "./routes/health";
import userRouter from "./routes/user";
import loginRouter from "./routes/login";
import productRouter from "./routes/product";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../frontend", "build")));
app.use(cors());

app.use("/health", healthCheckerRouter);
app.use("/user", userRouter);
app.use("/login", loginRouter);
app.use("/product", productRouter);

try {
  const port = process.env.PORT || 8091;
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error) {
  console.error(`Error occured:`);
}
