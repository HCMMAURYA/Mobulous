import { Router } from "express";
import { loginChecker, refreshToken } from "./controller";
import { userCredValdation } from "./middelware";
const router = Router();

router.post("/", userCredValdation, loginChecker);
router.post("/refresh", refreshToken);

export default router;