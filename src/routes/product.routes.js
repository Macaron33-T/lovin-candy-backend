import { Router } from "express";
import { getProductId } from "../modules/product/product.controller.js";
import { createProduct } from "../modules/product/product.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

export const router = Router();

router.get("/:id", getProductId);

// ไม่บังคับ auth 
router.post("/", createProduct);

// บังคับ auth:
// router.post("/", auth, createProduct);

