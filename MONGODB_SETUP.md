# MongoDB Atlas Configuration Guide

## Your MongoDB Atlas Connection String:
```
mongodb+srv://mondalsweta03_db_user:<db_password>@cluster0.ald7nod.mongodb.net/chai-culture?retryWrites=true&w=majority
```

## IMPORTANT: Replace `<db_password>` with your actual database password!

### Steps to Complete Setup:

#### 1. Update Local Environment File

Open `server/.env` and replace `<db_password>` with your actual MongoDB Atlas password:

```env
PORT=5000
MONGODB_URI=mongodb+srv://mondalsweta03_db_user:YOUR_ACTUAL_PASSWORD@cluster0.ald7nod.mongodb.net/chai-culture?retryWrites=true&w=majority
NODE_ENV=development
```

**Example:** If your password is `MyPass123`, it would be:
```
MONGODB_URI=mongodb+srv://mondalsweta03_db_user:MyPass123@cluster0.ald7nod.mongodb.net/chai-culture?retryWrites=true&w=majority
```

#### 2. Allow Network Access in MongoDB Atlas

1. Go to MongoDB Atlas Dashboard
2. Click "Network Access" in the left sidebar
3. Click "Add IP Address"
4. Select "Allow Access from Anywhere" (for development)
5. Confirm

#### 3. Test the Connection

```bash
# Navigate to server directory
cd server

# Seed the database (this will test the connection)
node seeder.js
```

You should see:
```
✅ MongoDB Connected: cluster0.ald7nod.mongodb.net
✅ Data Imported Successfully!
```

#### 4. Start the Backend

```bash
npm run dev
```

You should see:
```
🍵 Chai Culture Server running on port 5000
✅ MongoDB Connected: cluster0.ald7nod.mongodb.net
```

#### 5. For Vercel Deployment

When deploying to Vercel, add this environment variable:

**Variable Name:** `MONGODB_URI`
**Value:** 
```
mongodb+srv://mondalsweta03_db_user:YOUR_ACTUAL_PASSWORD@cluster0.ald7nod.mongodb.net/chai-culture?retryWrites=true&w=majority
```

(Replace `YOUR_ACTUAL_PASSWORD` with your actual password - don't include `<` or `>`)

---

## Troubleshooting

### If you forgot your password:
1. Go to MongoDB Atlas Dashboard
2. Click "Database Access"
3. Find your user `mondalsweta03_db_user`
4. Click "Edit"
5. Click "Edit Password"
6. Set a new password

### Connection Timeout Errors:
- Ensure you've allowed network access from anywhere (0.0.0.0/0)
- Check that your internet connection is stable

### Authentication Failed:
- Double-check your password (no spaces, correct capitalization)
- Ensure special characters in password are URL-encoded if needed

---

**Your database is ready to go! 🎉**
