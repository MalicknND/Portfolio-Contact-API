# Portfolio Contact API

API Express pour gérer le formulaire de contact de votre portfolio avec Resend.

## 🚀 Installation

```bash
npm install
```

## ⚙️ Configuration

Créez un fichier `.env` à la racine :

```env
PORT=3001
RESEND_API_KEY=your_resend_api_key
TO_EMAIL=your@email.com
```

## 📦 Scripts

```bash
npm start      # Démarrer le serveur
npm run dev    # Mode développement (avec nodemon)
```

## 📡 Endpoints

### POST `/api/contact`

Envoie un email de contact.

**Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Question",
  "message": "Votre message ici",
  "website": ""
}
```

**Response:**
```json
{
  "ok": true
}
```

### GET `/health`

Vérifie l'état du serveur.

**Response:**
```json
{
  "ok": true
}
```

## 🛡️ Sécurité

- Protection CORS
- Validation des données avec Zod
- Honeypot anti-spam (champ `website`)
- Limite de taille JSON (100kb)
- Échappement HTML

## 📁 Structure

```
src/
├── config/          # Configuration
├── middleware/      # Middlewares Express
├── routes/          # Routes API
├── schemas/         # Schémas de validation Zod
├── services/        # Logique métier
├── templates/       # Templates d'emails
├── utils/           # Utilitaires
├── app.js           # Configuration Express
└── server.js        # Point d'entrée
```
