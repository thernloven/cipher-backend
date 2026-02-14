import { Router } from "express";
import { languagesList } from "../controllers/languagesController.js";

const router = Router();
router.get("/languages", languagesList);

export default router;
