import { Router } from "express";

const router = Router();

router.get("/health", (req, res) => {
  res.json({ success: true, status: "ok" });
});

export default router;

