# 🚀 Vercel Deployment Guide - Chai Culture

## ⚠️ IMPORTANT: Before You Start

**FIRST, change your MongoDB password!** (See SECURITY_FIX.md)

Once you've changed it, come back here to deploy.

---

## 📋 Prerequisites Checklist

Before deploying, make sure you have:
- ✅ GitHub repository: https://github.com/Sweta1703/Shopify.git
- ✅ MongoDB Atlas account with a NEW password
- ✅ Vercel account (free) - Sign up at [vercel.com](https://vercel.com)

---

## Part 1: Deploy Backend to Vercel

### Step 1: Sign Up / Log In to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** (if new) or **"Log In"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub account

### Step 2: Create New Project for Backend

1. On Vercel Dashboard, click **"Add New..."** button (top right)
2. Select **"Project"**
3. Click **"Import Git Repository"**
4. Find and select your repository: **Sweta1703/Shopify**
5. Click **"Import"**

### Step 3: Configure Backend Settings

**⚠️ CRITICAL: Make these exact settings**

1. **Project Name:** `chai-culture-backend` (or any name you like)

2. **Framework Preset:** Leave as **"Other"**

3. **Root Directory:** Click **"Edit"** → Type: `server` → Click **"Continue"**

4. **Build Settings:**
   - Build Command: Leave empty (or `npm install`)
   - Output Directory: Leave empty
   - Install Command: `npm install`

5. **Environment Variables:** Click **"Add"**
   
   Add these variables ONE BY ONE:
   
   | Name | Value |
   |------|-------|
   | `MONGODB_URI` | `mongodb+srv://mondalsweta03_db_user:YOUR_NEW_PASSWORD@cluster0.ald7nod.mongodb.net/chai-culture?retryWrites=true&w=majority` |
   | `NODE_ENV` | `production` |

   **Replace `YOUR_NEW_PASSWORD` with the password you just changed in MongoDB Atlas!**

6. Click **"Deploy"**

### Step 4: Wait for Deployment

- Vercel will build and deploy (takes 1-2 minutes)
- Watch the logs to see progress
- When done, you'll see **"Congratulations!"**

### Step 5: Copy Your Backend URL

1. Click **"Continue to Dashboard"**
2. You'll see your deployment URL (e.g., `https://chai-culture-backend.vercel.app`)
3. **COPY THIS URL** - you'll need it for the frontend!

### Step 6: Test Your Backend

Open in browser: `https://YOUR-BACKEND-URL.vercel.app/api/products`

You should see JSON with your 3 products!

---

## Part 2: Deploy Frontend to Vercel

### Step 1: Update Frontend Configuration

**BEFORE deploying frontend, update the API URL:**

1. Open `client/vercel.json`
2. Replace `your-backend-url.vercel.app` with your actual backend URL
3. Save the file

**Example:**
```json
{
  "rewrites": [
    {
      "source": "/api/:path*",
      "destination": "https://chai-culture-backend.vercel.app/api/:path*"
    }
  ]
}
```

4. Commit and push this change:
```bash
git add client/vercel.json
git commit -m "Update backend URL"
git push origin main
```

### Step 2: Create New Project for Frontend

1. Back in Vercel Dashboard, click **"Add New..."** → **"Project"**
2. Click **"Import Git Repository"**
3. Select **Sweta1703/Shopify** again (yes, same repo!)
4. Click **"Import"**

### Step 3: Configure Frontend Settings

**⚠️ CRITICAL: Different settings than backend**

1. **Project Name:** `chai-culture` (or any name you like)

2. **Framework Preset:** Select **"Vite"**

3. **Root Directory:** Click **"Edit"** → Type: `client` → Click **"Continue"**

4. **Build Settings:** (Auto-filled by Vite preset)
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

5. **Environment Variables:** Click **"Add"** (if needed for frontend)
   
   | Name | Value |
   |------|-------|
   | `VITE_API_URL` | Your backend URL (e.g., `https://chai-culture-backend.vercel.app`) |

6. Click **"Deploy"**

### Step 4: Wait for Deployment

- Takes 2-3 minutes
- Watch the build logs
- When done, click **"Continue to Dashboard"**

### Step 5: Get Your Frontend URL

You'll see your live URL: `https://chai-culture.vercel.app` (or similar)

---

## 🎉 Testing Your Deployment

### Test the Live Site:

1. Open your frontend URL: `https://chai-culture.vercel.app`
2. You should see:
   - ✅ Royal Chai Culture branding
   - ✅ "Coming Soon" banner
   - ✅ 3 products displayed
   - ✅ Navigation working

### If Products Don't Load:

1. Open browser console (F12)
2. Check for errors
3. Verify backend URL in `client/vercel.json` is correct
4. Check backend is working: `https://YOUR-BACKEND-URL/api/products`

---

## 🔧 Common Issues & Fixes

### Issue 1: "500 Internal Server Error"
**Fix:** Check Vercel → Your Backend Project → Settings → Environment Variables
- Make sure `MONGODB_URI` is correct
- Verify MongoDB Atlas allows connections from anywhere (Network Access)

### Issue 2: Products Not Showing
**Fix:** 
1. Update `client/vercel.json` with correct backend URL
2. Redeploy frontend: Vercel Dashboard → Deployments → Click "..." → Redeploy

### Issue 3: CORS Errors
**Fix:** Backend should already have CORS enabled. If not, the `server.js` has `app.use(cors())`

---

## 📝 Final Checklist

After deployment:
- [ ] Backend URL works: `https://YOUR-BACKEND.vercel.app/api/products`
- [ ] Frontend loads: `https://YOUR-FRONTEND.vercel.app`
- [ ] Products are visible on homepage
- [ ] Navigation works (Home, Shop, About, Contact)
- [ ] No console errors in browser

---

## 🎨 Your Live URLs

After deployment, save these:

**Frontend (Main Site):**
`https://chai-culture.vercel.app` (or your custom URL)

**Backend (API):**
`https://chai-culture-backend.vercel.app`

---

## 🔄 Making Updates

When you make changes:

```bash
# Make your changes
git add .
git commit -m "Your change description"
git push origin main
```

Vercel will **automatically redeploy** both frontend and backend! 🎉

---

## 💡 Pro Tips

1. **Custom Domain:** Vercel allows free custom domains (Settings → Domains)
2. **Preview Deployments:** Every PR gets a preview URL
3. **Analytics:** Enable in Project Settings
4. **Environment Variables:** Can be different for Production/Preview/Development

---

**🍵 Your Chai Culture store is now live! Share the link for your Shopify assignment!** ✨
