/**
 * CAPTEX COMPANY - BACKEND SERVER
 * Express.js server for handling enquiry form submissions
 * with email notifications and local JSON database
 */

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// ====== MIDDLEWARE ======
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// ====== DATABASE (JSON FILE) ======
const DB_FILE = path.join(__dirname, 'data', 'enquiries.json');

// In-memory store (used as fallback on Vercel's read-only filesystem)
let inMemoryDB = { enquiries: [] };
let useFileDB = false;

// Try to set up file-based DB (works locally, not on Vercel)
try {
  if (!fs.existsSync(path.join(__dirname, 'data'))) {
    fs.mkdirSync(path.join(__dirname, 'data'), { recursive: true });
  }
  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify({ enquiries: [] }, null, 2));
  }
  useFileDB = true;
  console.log('[DB] Using file-based database');
} catch (e) {
  console.log('[DB] Filesystem not writable (Vercel env). Using in-memory store.');
}

function readDB() {
  if (!useFileDB) return inMemoryDB;
  try {
    const data = fs.readFileSync(DB_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (e) {
    return { enquiries: [] };
  }
}

function writeDB(data) {
  if (!useFileDB) {
    inMemoryDB = data;
    return;
  }
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
  } catch (e) {
    console.warn('[DB] Could not write to file, using in-memory store:', e.message);
    inMemoryDB = data;
  }
}

// ====== EMAIL TRANSPORTER ======
// Configure your email settings in .env file
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || ''
  }
});

async function sendEnquiryEmail(enquiry) {
  const adminEmail = process.env.ADMIN_EMAIL || 'sunvantaconsultancysolutions@gmail.com';
  const fromEmail = process.env.SMTP_USER || 'sunvantaconsultancysolutions@gmail.com';

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.log('[Email] SMTP not configured. Skipping email notification.');
    return;
  }

  // Email to admin
  const adminMailOptions = {
    from: `"Captex Company" <${fromEmail}>`,
    to: adminEmail,
    subject: `New LLP ROC Enquiry from ${enquiry.fullName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #4F46E5, #06B6D4); padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">New Enquiry Received</h1>
          <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0;">LLP ROC Compliance AMC</p>
        </div>
        <div style="background: #F9FAFB; padding: 30px; border: 1px solid #E5E7EB; border-top: none; border-radius: 0 0 8px 8px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #E5E7EB; font-weight: bold; color: #374151; width: 35%;">Full Name</td>
              <td style="padding: 12px; border-bottom: 1px solid #E5E7EB; color: #111827;">${enquiry.fullName}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #E5E7EB; font-weight: bold; color: #374151;">Email</td>
              <td style="padding: 12px; border-bottom: 1px solid #E5E7EB; color: #111827;">${enquiry.email}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #E5E7EB; font-weight: bold; color: #374151;">Mobile</td>
              <td style="padding: 12px; border-bottom: 1px solid #E5E7EB; color: #111827;">${enquiry.phone}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #E5E7EB; font-weight: bold; color: #374151;">City</td>
              <td style="padding: 12px; border-bottom: 1px solid #E5E7EB; color: #111827;">${enquiry.city || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #E5E7EB; font-weight: bold; color: #374151;">Service</td>
              <td style="padding: 12px; border-bottom: 1px solid #E5E7EB; color: #111827;">${enquiry.service || 'LLP ROC Compliance AMC'}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; color: #374151;">Message</td>
              <td style="padding: 12px; color: #111827;">${enquiry.message || 'No message'}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 12px; background: #EEF2FF; border-radius: 6px; font-size: 12px; color: #6B7280;">
            Received at: ${new Date(enquiry.timestamp).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
            | ID: ${enquiry.id}
          </div>
        </div>
      </div>
    `
  };

  // Confirmation email to user
  const userMailOptions = {
    from: `"Captex Company" <${fromEmail}>`,
    to: enquiry.email,
    subject: 'We received your enquiry - Captex Company',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #4F46E5, #06B6D4); padding: 40px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">Thank You, ${enquiry.fullName}!</h1>
          <p style="color: rgba(255,255,255,0.85); margin: 12px 0 0; font-size: 16px;">We've received your enquiry</p>
        </div>
        <div style="background: #FFFFFF; padding: 40px; border: 1px solid #E5E7EB; border-top: none; border-radius: 0 0 8px 8px;">
          <p style="color: #374151; font-size: 16px; line-height: 1.7;">
            Dear <strong>${enquiry.fullName}</strong>,
          </p>
          <p style="color: #374151; font-size: 15px; line-height: 1.7;">
            Thank you for reaching out to <strong>Captex Company</strong> for your LLP ROC Compliance needs. 
            Our expert will contact you within <strong>30 minutes</strong> at <strong>${enquiry.phone}</strong>.
          </p>
          
          <div style="background: #F0F4FF; border: 1px solid #C7D2FE; border-radius: 8px; padding: 20px; margin: 24px 0;">
            <h3 style="color: #4F46E5; margin: 0 0 12px;">What Happens Next?</h3>
            <ol style="color: #374151; font-size: 14px; line-height: 1.8; padding-left: 20px; margin: 0;">
              <li>Our Business Consultant will call you shortly</li>
              <li>We'll understand your LLP compliance requirements</li>
              <li>We'll send you a customized quote</li>
              <li>Upon confirmation, we'll assign a dedicated legal manager</li>
            </ol>
          </div>
          
          <p style="color: #374151; font-size: 14px;">
            For urgent queries, call us at <a href="tel:+919248042011" style="color: #4F46E5;">+91-9248042011 / +91-9248042012</a>
          </p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #E5E7EB; text-align: center; color: #9CA3AF; font-size: 12px;">
            © ${new Date().getFullYear()} Captex Company. All rights reserved.<br/>
            <em>This is an automated email. Please do not reply to this email.</em>
          </div>
        </div>
      </div>
    `
  };

  try {
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);
    console.log(`[Email] Notifications sent for enquiry from ${enquiry.email}`);
  } catch (err) {
    console.error('[Email] Failed to send email:', err.message);
  }
}

// ====== ROUTES ======

// Root - serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// ---- ENQUIRY SUBMISSION ----
app.post('/api/enquiry', async (req, res) => {
  try {
    const { fullName, email, phone, city, message, service } = req.body;

    // Server-side validation
    if (!fullName || fullName.trim().length < 2) {
      return res.status(400).json({ success: false, message: 'Full name is required' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: 'Valid email is required' });
    }

    const phoneClean = (phone || '').replace(/[\s\-\+]/g, '');
    if (!phoneClean || phoneClean.length < 10) {
      return res.status(400).json({ success: false, message: 'Valid mobile number is required' });
    }

    // Create enquiry record
    const enquiry = {
      id: `ENQ-${Date.now()}`,
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: phoneClean,
      city: (city || '').trim(),
      message: (message || '').trim(),
      service: service || 'LLP ROC Compliance AMC',
      status: 'new',
      timestamp: new Date().toISOString(),
      ip: req.ip
    };

    // Save to DB
    const db = readDB();
    db.enquiries.unshift(enquiry);
    writeDB(db);

    console.log(`[Enquiry] New enquiry received: ${enquiry.id} from ${enquiry.email}`);

    // Send email (non-blocking)
    sendEnquiryEmail(enquiry).catch(err => {
      console.error('[Email] Background email error:', err.message);
    });

    return res.status(201).json({
      success: true,
      message: 'Enquiry submitted successfully! Our expert will contact you shortly.',
      id: enquiry.id
    });

  } catch (err) {
    console.error('[API] Error processing enquiry:', err);
    return res.status(500).json({ success: false, message: 'Internal server error. Please try again.' });
  }
});

// ---- GET ALL ENQUIRIES (Admin) ----
app.get('/api/enquiries', (req, res) => {
  const adminKey = req.headers['x-admin-key'];
  if (adminKey !== process.env.ADMIN_KEY) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }
  const db = readDB();
  return res.json({ success: true, total: db.enquiries.length, data: db.enquiries });
});

// ---- UPDATE ENQUIRY STATUS (Admin) ----
app.patch('/api/enquiries/:id', (req, res) => {
  const adminKey = req.headers['x-admin-key'];
  if (adminKey !== process.env.ADMIN_KEY) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }

  const db = readDB();
  const idx = db.enquiries.findIndex(e => e.id === req.params.id);
  if (idx === -1) {
    return res.status(404).json({ success: false, message: 'Enquiry not found' });
  }

  db.enquiries[idx] = { ...db.enquiries[idx], ...req.body, updatedAt: new Date().toISOString() };
  writeDB(db);

  return res.json({ success: true, data: db.enquiries[idx] });
});

// ---- HEALTH CHECK ----
app.get('/api/health', (req, res) => {
  const db = readDB();
  return res.json({
    status: 'ok',
    service: 'Captex Company API',
    timestamp: new Date().toISOString(),
    totalEnquiries: db.enquiries.length,
    version: '1.0.0'
  });
});

// ---- CONTACT PAGE HANDLER ----
app.post('/api/contact', async (req, res) => {
  // Same as enquiry for now
  req.body.service = req.body.service || 'General Contact';
  return app._router.handle({ ...req, url: '/api/enquiry', path: '/api/enquiry' }, res, () => {});
});

// ---- 404 Handler ----
app.use((req, res) => {
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'index.html'));
  } else {
    res.status(404).json({ success: false, message: 'Not Found' });
  }
});

// ---- Global Error Handler ----
app.use((err, req, res, next) => {
  console.error('[Server Error]', err);
  res.status(500).json({ success: false, message: 'Internal server error' });
});

// ====== START SERVER ======
app.listen(PORT, () => {
  console.log('\n╔═══════════════════════════════════════════╗');
  console.log('║   CAPTEX COMPANY - LLP ROC COMPLIANCE      ║');
  console.log('╠═══════════════════════════════════════════╣');
  console.log(`║   Server: http://localhost:${PORT}             ║`);
  console.log(`║   API Health: http://localhost:${PORT}/api/health ║`);
  console.log('╚═══════════════════════════════════════════╝\n');
});

module.exports = app;
