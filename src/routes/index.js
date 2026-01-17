import { Router } from "express";
import { router as usersRoutes } from "./users.routes.js";
import productRoutes from "./product.routes.js";
import cartRoutes from "./cart.routes.js";
import authRoutes from "./auth.routes.js";

export const router = Router();

router.use("/users", usersRoutes);
router.use("/products", productRoutes);
router.use("/cart", cartRoutes);
router.use("/auth", authRoutes);

