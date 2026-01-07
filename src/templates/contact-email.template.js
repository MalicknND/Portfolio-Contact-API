import { escapeHtml } from "../utils/html.js";

export function getContactEmailTemplate({ name, email, subject, message }) {
  return `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
        <tr>
          <td align="center">
            <table width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
              
              <!-- Header -->
              <tr>
                <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
                  <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                    💌 Nouveau Message
                  </h1>
                  <p style="margin: 10px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 14px;">
                    Depuis votre portfolio
                  </p>
                </td>
              </tr>
              
              <!-- Content -->
              <tr>
                <td style="padding: 40px 30px;">
                  
                  <!-- Contact Info Card -->
                  <table width="100%" style="margin-bottom: 30px; background-color: #f8f9fa; border-radius: 8px; padding: 20px;">
                    <tr>
                      <td>
                        <table width="100%">
                          <tr>
                            <td style="padding: 8px 0;">
                              <span style="display: inline-block; color: #6c757d; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">👤 Nom</span>
                              <p style="margin: 5px 0 0 0; color: #212529; font-size: 16px; font-weight: 600;">${escapeHtml(
                                name
                              )}</p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 8px 0;">
                              <span style="display: inline-block; color: #6c757d; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">📧 Email</span>
                              <p style="margin: 5px 0 0 0;">
                                <a href="mailto:${escapeHtml(
                                  email
                                )}" style="color: #667eea; text-decoration: none; font-size: 16px; font-weight: 500;">${escapeHtml(
    email
  )}</a>
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 8px 0;">
                              <span style="display: inline-block; color: #6c757d; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">📋 Sujet</span>
                              <p style="margin: 5px 0 0 0; color: #212529; font-size: 16px; font-weight: 600;">${escapeHtml(
                                subject
                              )}</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                  
                  <!-- Message Card -->
                  <table width="100%" style="border-left: 4px solid #667eea; background-color: #f8f9fa; border-radius: 8px; padding: 20px;">
                    <tr>
                      <td>
                        <span style="display: inline-block; color: #6c757d; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 10px;">💬 Message</span>
                        <div style="margin-top: 10px; color: #212529; font-size: 15px; line-height: 1.6;">
                          ${escapeHtml(message).replace(/\n/g, "<br/>")}
                        </div>
                      </td>
                    </tr>
                  </table>
                  
                  <!-- Call to Action -->
                  <table width="100%" style="margin-top: 30px;">
                    <tr>
                      <td align="center">
                        <a href="mailto:${escapeHtml(
                          email
                        )}?subject=Re: ${escapeHtml(subject)}" 
                           style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 15px; box-shadow: 0 2px 4px rgba(102, 126, 234, 0.3);">
                          📨 Répondre maintenant
                        </a>
                      </td>
                    </tr>
                  </table>
                  
                </td>
              </tr>
              
              <!-- Footer -->
              <tr>
                <td style="background-color: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #e9ecef;">
                  <p style="margin: 0; color: #6c757d; font-size: 13px; line-height: 1.5;">
                    Ce message a été envoyé depuis le formulaire de contact de votre portfolio<br/>
                    <span style="color: #adb5bd;">portfolio.msndiaye.com</span>
                  </p>
                </td>
              </tr>
              
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}
