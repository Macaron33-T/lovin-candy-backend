import { Router } from "express";
import { updateCart } from "../modules/cart/cart.controller.js";

export const router = Router();

router.patch("/:id", updateCart);