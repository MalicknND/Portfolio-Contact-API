import { Router } from "express";
import { ContactSchema } from "../schemas/contact.schema.js";
import { sendContactEmail } from "../services/email.service.js";

const router = Router();

router.post("/contact", async (req, res, next) => {
  try {
    // Validation des données
    const parsed = ContactSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        ok: false,
        error: "Données invalides",
        details: parsed.error.errors,
      });
    }

    const { website, ...contactData } = parsed.data;

    // Honeypot anti-spam
    if (website && website.trim().length > 0) {
      console.log("🚫 Bot détecté via honeypot");
      return res.status(200).json({ ok: true });
    }

    // Envoi de l'email
    await sendContactEmail(contactData);

    return res.status(200).json({ ok: true });
  } catch (error) {
    next(error);
  }
});

export default router;
