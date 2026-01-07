import { Router } from "express";
import contactRoutes from "./contact.routes.js";

const router = Router();

router.use("/api", contactRoutes);
router.get("/health", (req, res) => res.json({ ok: true }));

export default router;
