import express from 'express'
import { generateLimiter } from "../middleware/rateLimiter.js";
const router = express.Router();

router.post("/generate", generateLimiter, async (req, res) => {
  // your existing generate logic
});

export default router;