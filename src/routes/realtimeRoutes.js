import { Router } from "express";
import { createRealtimeSession } from "../controllers/realtimeController.js";

const router = Router();
router.post("/chat/realtime", createRealtimeSession);

export default router;
