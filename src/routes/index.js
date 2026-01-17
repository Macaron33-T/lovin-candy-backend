import { Router } from "express";
import { router as usersRoutes } from "./users.routes.js";
import { router as productRoutes } from "./product.routes.js";
import { router as cartRoutes } from "./cart.routes.js";

export const router = Router();

router.use("/users", usersRoutes);

router.use("/product", productRoutes);

router.use("/cart", cartRoutes);