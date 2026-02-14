import { Router } from "express";
import { homeData } from "../controllers/homeController.js";

const router = Router();
router.get("/home", homeData);

export default router;
