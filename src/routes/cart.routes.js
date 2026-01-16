import { Router } from "express";
import { addItemToCart } from "../modules/cart/cart.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();

// guest
router.post("/items", addItemToCart);

// login
router.post("/items/me", auth, addItemToCart);

export default router;


