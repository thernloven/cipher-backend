import dotenv from "dotenv";
dotenv.config();

import express from "express";
import homeRoutes from "./src/routes/homeRoutes.js";
import languagesRoutes from "./src/routes/languagesRoutes.js";
import realtimeRoutes from "./src/routes/realtimeRoutes.js";

const app = express();
app.use(express.json());

app.use("/api", homeRoutes);
app.use("/api", languagesRoutes);
app.use("/api", realtimeRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Cipher Backend Running" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`[SERVER] Running on port ${PORT}`);
});
