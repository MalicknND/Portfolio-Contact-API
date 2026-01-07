export function errorHandler(err, req, res, next) {
  console.error("❌ Erreur:", err);

  // Erreur de validation Zod
  if (err.name === "ZodError") {
    return res.status(400).json({
      ok: false,
      error: "Validation error",
      details: err.errors,
    });
  }

  // Erreur CORS
  if (err.message === "Not allowed by CORS") {
    return res.status(403).json({
      ok: false,
      error: "CORS policy violation",
    });
  }

  // Erreur générique
  return res.status(500).json({
    ok: false,
    error: "Internal server error",
  });
}
