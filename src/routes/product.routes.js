import { Router } from "express";
import { getProductId } from "../modules/product/product.controller.js";

export const router = Router();

router.get("/:id", getProductId);