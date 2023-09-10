import { Router } from "express";
const router = Router();
import { wareHouse, wareHouseGellAll } from "./controller";
import { authenticateAdmin } from "./middelware";

router.post("/create/admin/warehouses", authenticateAdmin, wareHouse);
router.patch("/admin/warehousesGetAll", authenticateAdmin, wareHouseGellAll);

export default router;
