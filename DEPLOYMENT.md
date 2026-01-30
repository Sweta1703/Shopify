# Vercel Deployment Guide for Chai Culture

## Overview
This guide will help you deploy both the frontend (React) and backend (Node.js/Express) to Vercel.

## Prerequisites
1. A Vercel account ([vercel.com](https://vercel.com))
2. A MongoDB Atlas account ([mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas))
3. Git installed on your computer
4. GitHub/GitLab account (recommended)

---

## Step 1: Set Up MongoDB Atlas (Cloud Database)

Since Vercel is serverless, you need a cloud MongoDB database:

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account and cluster
3. Click "Connect" → "Connect your application"
4. Copy the connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/chai-culture`)
5. Replace `<password>` with your actual password
6. Save this connection string - you'll need it later

---

## Step 2: Deploy Backend to Vercel

### Option A: Using Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to server directory
cd server

# Login to Vercel
vercel login

# Deploy
vercel
```

### Option B: Using Vercel Dashboard

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "Add New" → "Project"
3. Import your Git repository
4. Set **Root Directory** to `server`
5. Add Environment Variables:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `NODE_ENV`: `production`
6. Click "Deploy"

### Important: Add Environment Variables

After deployment, go to your project settings:
- Settings → Environment Variables
- Add:
  - `MONGODB_URI` = `your-mongodb-atlas-connection-string`
  - `NODE_ENV` = `production`

**Save your backend URL** (e.g., `https://chai-culture-server.vercel.app`)

---

## Step 3: Update Frontend API Configuration

Before deploying the frontend, update the API URL:

### Option 1: Environment Variable (Recommended)

Create `client/.env.production`:
```
VITE_API_URL=https://your-backend-url.vercel.app
```

Then update `client/src/pages/Home.jsx` and `Shop.jsx`:
```javascript
const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/products`);
```

### Option 2: Direct URL (Quick Fix)

Update `client/vercel.json`:
```json
{
  "rewrites": [
    {
      "source": "/api/:path*",
      "destination": "https://your-actual-backend-url.vercel.app/api/:path*"
    }
  ]
}
```

---

## Step 4: Deploy Frontend to Vercel

### Using Vercel CLI:

```bash
# Navigate to client directory
cd client

# Deploy
vercel
```

### Using Vercel Dashboard:

1. Create a **new project** in Vercel dashboard
2. Import your repository again
3. Set **Root Directory** to `client`
4. Framework Preset: Vite
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Install Command: `npm install`
8. Click "Deploy"

---

## Step 5: Seed the Database

After backend deployment, seed your MongoDB Atlas database:

```bash
# Update server/.env with MongoDB Atlas URI
MONGODB_URI=mongodb+srv://...

# Run seeder locally (it will connect to Atlas)
cd server
node seeder.js
```

---

## Troubleshooting

### CORS Errors
If you get CORS errors, ensure your backend `server.js` has:
```javascript
app.use(cors({
  origin: 'https://your-frontend-url.vercel.app',
  credentials: true
}));
```

### 500 Errors
- Check Vercel logs: Dashboard → Your Project → Deployments → Click deployment → View Function Logs
- Ensure MongoDB Atlas allows connections from anywhere (IP: `0.0.0.0/0`) in Network Access

### Environment Variables Not Working
- Redeploy after adding environment variables
- Check they're set for "Production" environment

---

## Quick Deployment Checklist

- [ ] MongoDB Atlas cluster created
- [ ] Connection string obtained
- [ ] Backend deployed to Vercel
- [ ] Environment variables added to backend
- [ ] Database seeded
- [ ] Frontend `vercel.json` updated with backend URL  
- [ ] Frontend deployed to Vercel
- [ ] Test the live application

---

## Your Deployment URLs

After deployment, you'll have:
- **Frontend**: `https://chai-culture.vercel.app`
- **Backend**: `https://chai-culture-server.vercel.app`

---

## Alternative: Deploy as Monorepo

You can also deploy both as a single project:

1. Create `vercel.json` in root:
```json
{
  "builds": [
    { "src": "client/package.json", "use": "@vercel/static-build", "config": { "distDir": "dist" } },
    { "src": "server/server.js", "use": "@vercel/node" }
  ],
  "routes": [
    { "src": "/api/(.*)", "dest": "server/server.js" },
    { "src": "/(.*)", "dest": "client/$1" }
  ]
}
```

2. Deploy the root directory

---

**Need help?** Check [Vercel Documentation](https://vercel.com/docs) or the Chai Culture README.md
