# Chai Culture 🍵

Premium Indian chai brand inspired by royal heritage, warmth, and authenticity.

## Project Structure

```
chai-culture/
├── client/                 # React Frontend (Vite + TailwindCSS)
├── server/                 # Node/Express Backend
└── package.json            # Root configuration
```

## Features

- ✨ Premium, elegant UI design with royal aesthetics
- 🎨 TailwindCSS for styling with custom color palette
- 🍵 Three signature products: Royal Cardamom Bloom, Masala Heritage Fusion, Zesty Ginger Elixir
- 📱 Fully responsive design
- 🚀 "Coming Soon" banner with pre-order functionality
- 🔄 MERN stack architecture (MongoDB, Express, React, Node.js)

## Brand Colors

- **Royal Gold**: `#D4AF37`
- **Deep Brown**: `#3D2B1F`
- **Heritage Brown**: `#5C4033`
- **Cream**: `#FDF5E6`

## Installation

### Install all dependencies
```bash
npm run install-all
```

### Or install individually:

```bash
# Root dependencies
npm install

# Client dependencies
cd client
npm install

# Server dependencies
cd ../server
npm install
```

## Running the Application

### Development Mode (Both Client & Server)
```bash
npm run dev
```

### Run Client Only
```bash
npm run client
```

### Run Server Only
```bash
npm run server
```

The client will run on `http://localhost:3000`  
The server will run on `http://localhost:5000`

## Database Setup

1. Make sure MongoDB is installed and running locally
2. Update `.env` file in the `server` directory with your MongoDB URI
3. Seed the database with sample products:

```bash
cd server
node seeder.js
```

## Design Choices

1. **Royal Aesthetic**: The design uses a premium color palette of golds, deep browns, and creams to evoke a sense of royal heritage and warmth.

2. **Typography Hierarchy**: Playfair Display (serif) for headings creates elegance and authority, while Montserrat (sans-serif) ensures readability for body text.

3. **Spacious Layout**: Generous padding and whitespace create a boutique feel, moving away from generic e-commerce templates toward a brand-story-focused experience.

## Tech Stack

### Frontend
- React 18
- Vite
- TailwindCSS v4
- React Router DOM
- Axios

### Backend
- Node.js
- Express
- MongoDB with Mongoose
- CORS

## Deployment

### Vercel Deployment

This application can be deployed to Vercel. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

**Quick steps:**
1. Set up MongoDB Atlas (cloud database)
2. Deploy backend to Vercel with MongoDB URI as environment variable
3. Deploy frontend to Vercel
4. Update frontend API URL to point to deployed backend

For local development, follow the installation steps above.

## Tagline
**Brew the Royal Tradition**

---

© 2026 Chai Culture. All rights reserved.
