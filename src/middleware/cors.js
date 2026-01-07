import cors from "cors";
import { config } from "../config/index.js";

export const corsMiddleware = cors({
  origin: (origin, callback) => {
    // Autoriser les requêtes sans origin (curl, Postman, etc.)
    if (!origin) return callback(null, true);

    if (config.cors.allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error("Not allowed by CORS"));
  },
});
