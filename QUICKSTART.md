# Chai Culture - Quick Start Guide

## ✅ Your Application is Ready!

### MongoDB Atlas Connection
- **Status**: ✅ Connected
- **Database**: chai-culture
- **Products**: 3 signature blends seeded

---

## 🚀 Running Locally

### Start Backend Server:
```bash
cd server
npm run dev
```
You should see:
```
🍵 Chai Culture Server running on port 5000
✅ MongoDB Connected: cluster0.ald7nod.mongodb.net
```

### Start Frontend (in another terminal):
```bash
cd client
npm run dev
```

**Access the app**: http://localhost:3000

---

## ☁️ Deploying to Vercel

### Backend Deployment

1. **Push to GitHub** (if not already):
```bash
git init
git add .
git commit -m "Initial commit - Chai Culture"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. **Deploy Backend**:
   - Go to [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "Add New" → "Project"
   - Import your repository
   - **Set Root Directory**: `server`
   - **Add Environment Variable**:
     - Name: `MONGODB_URI`
     - Value: `mongodb+srv://mondalsweta03_db_user:dQZH7PWqKPheZrPv@cluster0.ald7nod.mongodb.net/chai-culture?retryWrites=true&w=majority`
   - Click "Deploy"

3. **Copy your backend URL** (e.g., `https://chai-culture-server.vercel.app`)

### Frontend Deployment

1. **Update `client/vercel.json`**:
   Replace `your-backend-url.vercel.app` with your actual backend URL

2. **Deploy Frontend**:
   - In Vercel Dashboard, click "Add New" → "Project"
   - Import the **same repository**
   - **Set Root Directory**: `client`
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Click "Deploy"

---

## 📝 Environment Variables Summary

### For Vercel Backend:
```
MONGODB_URI=mongodb+srv://mondalsweta03_db_user:dQZH7PWqKPheZrPv@cluster0.ald7nod.mongodb.net/chai-culture?retryWrites=true&w=majority
NODE_ENV=production
```

### MongoDB Atlas Settings:
- Username: `mondalsweta03_db_user`
- Password: `dQZH7PWqKPheZrPv`
- Database: `chai-culture`
- Network Access: Allow from Anywhere (0.0.0.0/0)

---

## 🎯 What You Have

### Frontend (React + Tailwind v4):
- ✅ Premium royal design
- ✅ "Coming Soon" hero banner
- ✅ 3 product cards (Royal Cardamom Bloom, Masala Heritage Fusion, Zesty Ginger Elixir)
- ✅ Navigation: Home | Shop | About | Contact
- ✅ Fully responsive

### Backend (Node/Express/MongoDB):
- ✅ RESTful API (`/api/products`)
- ✅ MongoDB Atlas cloud database
- ✅ CORS enabled
- ✅ 3 products seeded

---

## 🎨 Brand Colors
- Royal Gold: #D4AF37
- Deep Brown: #3D2B1F
- Heritage Brown: #5C4033
- Cream: #FDF5E6

---

**🍵 Ready to Brew the Royal Tradition! ✨**

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)
