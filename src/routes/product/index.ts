import { Router } from "express";
import { createProduct, getproducts, productDelete, updateProductById} from "./controller";
const router = Router();

router.get("/", getproducts);
router.post("/create", createProduct);
router.delete("/delete", productDelete);
router.put("/update", updateProductById);



export default router;