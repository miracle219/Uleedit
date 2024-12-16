import { Router } from "express";

const router = Router();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.get("/", (req, res, next) => {
  return res.status(200).json({ message: "Welcome to the API" });
});

export default router;
