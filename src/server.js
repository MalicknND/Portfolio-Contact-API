import app from "./app.js";
import { config } from "./config/index.js";

const PORT = config.port;

app.listen(PORT, () => {
  console.log(`🚀 API running on http://localhost:${PORT}`);
  console.log(`📧 Emails will be sent to: ${config.email.to}`);
  console.log(`✅ Environment: ${process.env.NODE_ENV || "development"}`);
});
