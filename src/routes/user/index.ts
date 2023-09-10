import { Router } from "express";
const router = Router();
import { userCreate, getAllUser, userDelete,adminAccess} from "./controller";
import { authenticateAdmin } from "./middelware";

router.post("/create", userCreate);
router.patch("/admin/user/:userId",authenticateAdmin, adminAccess);
router.get("/list", getAllUser);
router.delete("/delete", userDelete);

adminAccess




export default router;