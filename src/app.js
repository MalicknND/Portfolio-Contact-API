import express from "express";
import "dotenv/config";
import { config, validateConfig } from "./config/index.js";
import { corsMiddleware } from "./middleware/cors.js";
import { errorHandler } from "./middleware/error-handler.js";
import routes from "./routes/index.js";

// Valider la configuration au démarrage
validateConfig();

const app = express();

// Middlewares
app.use(corsMiddleware);
app.use(express.json({ limit: config.limits.jsonSize }));

// Routes
app.use(routes);

// Gestionnaire d'erreurs (doit être en dernier)
app.use(errorHandler);

export default app;
