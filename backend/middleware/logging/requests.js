import { resolveIP } from "../../utils/index.js";

export const requestLogger = (req, res, next) => {
  const now = new Date();
  console.log(
    `[${now.toISOString()}] ${req.method} | ${req.path} | ${resolveIP(req)}`
  );
  next();
};
