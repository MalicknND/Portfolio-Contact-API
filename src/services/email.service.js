import { Resend } from "resend";
import { config } from "../config/index.js";
import { getContactEmailTemplate } from "../templates/contact-email.template.js";

const resend = new Resend(config.resend.apiKey);

export async function sendContactEmail({ name, email, subject, message }) {
  console.log("📧 Envoi d'email à:", config.email.to);

  const result = await resend.emails.send({
    from: config.resend.fromEmail,
    to: [config.email.to],
    reply_to: email,
    subject: `${config.email.subjectPrefix} ${subject}`,
    html: getContactEmailTemplate({ name, email, subject, message }),
  });

  if (result.error) {
    console.error("❌ Erreur Resend:", result.error);
    throw new Error(result.error.message);
  }

  console.log("✅ Email envoyé:", result.data.id);
  return result.data;
}
