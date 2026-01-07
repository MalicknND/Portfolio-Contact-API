export const config = {
  port: process.env.PORT || 3001,
  resend: {
    apiKey: process.env.RESEND_API_KEY,
    fromEmail: "Portfolio <onboarding@resend.dev>",
  },
  email: {
    to: process.env.TO_EMAIL,
    subjectPrefix: "[Portfolio]",
  },
  cors: {
    allowedOrigins: [
      "https://portfolio.msndiaye.com",
      "http://localhost:5173",
    ],
  },
  limits: {
    jsonSize: "100kb",
  },
};

export function validateConfig() {
  if (!config.resend.apiKey) {
    throw new Error("RESEND_API_KEY is required");
  }
  if (!config.email.to) {
    throw new Error("TO_EMAIL is required");
  }
}
