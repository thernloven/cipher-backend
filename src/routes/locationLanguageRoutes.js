import { Router } from "express";
import { locationLanguageHandler } from "../controllers/locationLanguageController.js";

const router = Router();
router.get("/location_language", locationLanguageHandler);

export default router;
