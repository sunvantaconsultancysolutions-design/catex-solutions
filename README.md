# 🏛️ Catax Solutions Private Limited — Website

> Legal tech platform for company registration, trademark, GST, ISO, and compliance services.

---

## 📁 Project Structure

```
captex 3/
├── index.html              # Home page (main landing page)
├── contact.html            # Contact us page
├── admin.html              # Admin dashboard (protected)
├── about.html              # About us page
├── gst.html                # GST Registration service page
├── iso.html                # ISO Certification service page
├── msme.html               # MSME / Udyam Registration page
├── trademark.html          # Trademark Registration page
├── private-limited.html    # Private Limited Company page
├── ... (other service pages)
├── style.css               # Global stylesheet
├── components.js           # Shared navbar + footer injected on all pages
├── script.js               # Homepage scripts (form submission, animations)
├── server.js               # Node.js/Express backend server
├── package.json            # npm dependencies
├── vercel.json             # Vercel deployment configuration
├── .env                    # Environment variables (DO NOT COMMIT TO GIT)
├── .gitignore              # Git ignore rules
└── data/
    └── enquiries.json      # Local JSON database (auto-created, not in git)
```

---

## 🔐 Admin Panel

| Field        | Value                              |
|--------------|------------------------------------|
| **URL**      | `/admin.html`                      |
| **Password** | `captex-admin-2024-secure-key`     |

> ⚠️ This key is set as the `ADMIN_KEY` environment variable on the server.  
> Change it before going live by updating the `.env` file or Vercel environment variables.

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory with the following values:

```env
# Server Port
PORT=3000

# Admin Panel Access Key — used to authenticate the admin dashboard
ADMIN_KEY=captex-admin-2024-secure-key

# Gmail SMTP — for sending enquiry notification emails
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=sunvantaconsultancysolutions@gmail.com
SMTP_PASS=fgzu cstd mmwb smqv

# Email address that receives new lead notifications
ADMIN_EMAIL=sunvantaconsultancysolutions@gmail.com
```

> 💡 **Gmail App Password:** The `SMTP_PASS` above is a Gmail App Password (not your regular Gmail password).  
> To generate a new one: Google Account → Security → 2-Step Verification → App Passwords.

---

## 🚀 Local Development Setup

### Prerequisites
- **Node.js** v18 or above
- **npm** v8 or above

### Steps

```bash
# 1. Install dependencies
npm install

# 2. Create your .env file (copy from above)
# Make sure .env exists with all values filled in

# 3. Start the development server
node server.js

# 4. Open in browser
# http://localhost:3000
```

---

## 🗄️ Database Setup

### Current Setup (JSON File — Local only)
The app currently uses a **local JSON file** (`data/enquiries.json`) as its database.

- ✅ Works perfectly when hosted on a **VPS / cPanel / dedicated server**
- ❌ Does NOT persist on **Vercel** (serverless environment — filesystem is read-only)

### Option A: VPS / Traditional Hosting (Recommended for persistence)
No additional setup needed. Just run `node server.js` and the `data/enquiries.json` file will be created automatically.

### Option B: MongoDB Atlas (For Vercel / Cloud)

If deploying to **Vercel** and want the admin panel to show all enquiries permanently, set up a free MongoDB Atlas database:

#### Step 1 — Create Free MongoDB Atlas Account
1. Go to → [mongodb.com/atlas](https://www.mongodb.com/atlas)
2. Sign up for free → Create a **Free M0 Cluster**
3. Set database user: username = `captex`, choose a strong password
4. Allow network access → Add IP → `0.0.0.0/0` (allow all)
5. Click **Connect** → Get the **Connection String** (looks like):  
   `mongodb+srv://captex:<password>@cluster0.xxxxx.mongodb.net/captexdb`

#### Step 2 — Install MongoDB Driver
```bash
npm install mongoose
```

#### Step 3 — Add to .env
```env
MONGODB_URI=mongodb+srv://captex:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/captexdb
```

#### Step 4 — Tell the Developer
Share the connection string with the developer handling the backend update. They will update `server.js` to use `mongoose` instead of the JSON file.

---

## 🌐 Deploy to Vercel

### Step 1 — Push to GitHub
```bash
cd "F:\jashwanth\captex 3"
git init
git add .
git commit -m "Initial deploy - Catax Solutions"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/catax-solutions.git
git push -u origin main
```

### Step 2 — Connect to Vercel
1. Go to → [vercel.com](https://vercel.com)
2. Login with GitHub → **Add New Project**
3. Import your `catax-solutions` repository
4. Framework preset: **Other**
5. Build command: *(leave empty)*
6. Install command: `npm install`

### Step 3 — Add Environment Variables on Vercel
Go to **Project Settings → Environment Variables** and add:

| Key           | Value                              |
|---------------|------------------------------------|
| `PORT`        | `3000`                             |
| `ADMIN_KEY`   | `captex-admin-2024-secure-key`     |
| `SMTP_HOST`   | `smtp.gmail.com`                   |
| `SMTP_PORT`   | `587`                              |
| `SMTP_USER`   | `sunvantaconsultancysolutions@gmail.com`   |
| `SMTP_PASS`   | `fgzu cstd mmwb smqv`              |
| `ADMIN_EMAIL` | `sunvantaconsultancysolutions@gmail.com`   |
| `MONGODB_URI` | *(add if using MongoDB Atlas)*     |

### Step 4 — Deploy!
Click **Deploy**. Your site will be live at:
```
https://catax-solutions.vercel.app
```

---

## 📦 Deploy to cPanel / VPS (Traditional Hosting)

If your hosting provider gives you a VPS or Node.js-compatible cPanel:

```bash
# 1. Upload project files via FTP or Git
# 2. SSH into server
ssh user@your-server.com

# 3. Navigate to project
cd /var/www/catax

# 4. Install dependencies
npm install --production

# 5. Set up environment variables
nano .env
# (paste the env values from above)

# 6. Start with PM2 (process manager — keeps server running)
npm install -g pm2
pm2 start server.js --name "catax"
pm2 save
pm2 startup
```

Your site runs on port 3000. Configure **Nginx** or **Apache** to proxy port 80 → 3000.

---

## 📧 Email Notifications

When a user submits any enquiry form:
1. **Admin gets an email** at `sunvantaconsultancysolutions@gmail.com` with full lead details
2. **User gets a confirmation email** with next steps

All handled automatically by `server.js` via Gmail SMTP.

---

## 🔑 API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| `GET` | `/` | Serve home page |
| `POST` | `/api/enquiry` | Submit a new enquiry |
| `GET` | `/api/enquiries` | Get all enquiries *(requires Admin Key header)* |
| `PATCH` | `/api/enquiries/:id` | Update enquiry status *(requires Admin Key header)* |
| `GET` | `/api/health` | Server health check |

**Admin API usage:**
```bash
# Get all enquiries
curl -H "x-admin-key: captex-admin-2024-secure-key" https://your-domain.com/api/enquiries

# Health check
curl https://your-domain.com/api/health
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3 (Vanilla), JavaScript (ES6) |
| Backend | Node.js + Express.js |
| Database | JSON file (local) / MongoDB Atlas (cloud) |
| Email | Nodemailer + Gmail SMTP |
| Deployment | Vercel (recommended) or any Node.js VPS |
| Fonts | Google Fonts — Inter, Outfit |
| Icons | Font Awesome 6.5 |

---

## 📞 Contact

**Catax Solutions Private Limited**  
📧 sunvantaconsultancysolutions@gmail.com  
📱 +91-9248042011 / +91-9248042012  
🌐 [cataxsolutions.com](https://cataxsolutions.com)

---

*Built with ❤️ for Catax Solutions Private Limited. © 2026 All rights reserved.*
