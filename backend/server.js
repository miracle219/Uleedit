import * as constants from "./constant/environment.js";
import dotenv from "dotenv";
import express from "express";
import path from "path";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";
import {
  errorHandler,
  escapeStrings,
  requestLogger,
} from "./middleware/index.js";
import { api } from "./routes/index.js";

const { ENV, magenta, reset } = constants;

// Load environment variables in development mode
if (ENV === "dev") {
  dotenv.config({ path: ".env" });
}

const app = express();

app.set("trust proxy", 1);
app.disable("x-powered-by");

// Security headers with Helmet
app.use(
  helmet({
    contentSecurityPolicy: true,
  })
);

// Rate limiting middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 70, // limit each IP to 70 requests per window
  validate: true,
});

app.use(bodyParser.json({ limit: "10kb" }));
app.use(express.urlencoded({ limit: "10kb", extended: true }));
app.use(cookieParser());

// Custom middleware to escape strings
app.use(escapeStrings);

// Static file caching middleware
app.use((req, res, next) => {
  if (
    req.path.startsWith("/js/") ||
    req.path.startsWith("/fonts/") ||
    req.path.startsWith("/images/") ||
    req.path.startsWith("/css/")
  ) {
    res.setHeader("Cache-Control", "public, max-age=31536000"); // 1 year
  }
  next();
});

// log requests to the console
app.use(requestLogger);

// Serve static files
app.use(express.static(path.resolve("public")));

// Apply rate limiting
app.use(limiter);

// API routes
app.use(api);

// Custom error handling middleware
app.use(errorHandler);

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`${magenta}Server running on PORT: ${PORT} ENV: ${ENV}${reset}`);
});
