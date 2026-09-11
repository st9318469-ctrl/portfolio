import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ── Middleware ────────────────────────────────────────────────────────────────
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(express.json());

// ── Nodemailer transporter ────────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,   // your Gmail address
    pass: process.env.GMAIL_PASS,   // Gmail App Password (not your login password)
  },
});

// ── POST /api/contact ─────────────────────────────────────────────────────────
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    // Email sent TO you
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New message from ${name} — Portfolio`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#0ea5e9">New Portfolio Message</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr>
              <td style="padding:8px 0;color:#64748b;width:80px">Name</td>
              <td style="padding:8px 0;font-weight:600">${name}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#64748b">Email</td>
              <td style="padding:8px 0"><a href="mailto:${email}">${email}</a></td>
            </tr>
          </table>
          <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0"/>
          <p style="color:#334155;line-height:1.6">${message.replace(/\n/g, '<br/>')}</p>
        </div>
      `,
    });

    // Auto-reply TO the sender
    await transporter.sendMail({
      from: `"Sachin Thakor" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `Got your message, ${name}!`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#0ea5e9">Thanks for reaching out!</h2>
          <p style="color:#334155;line-height:1.6">
            Hi ${name}, I received your message and will get back to you as soon as possible.
          </p>
          <p style="color:#334155;line-height:1.6">— Sachin Thakor</p>
        </div>
      `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Email error:', err);
    res.status(500).json({ error: 'Failed to send email. Please try again.' });
  }
});

// ── Health check ──────────────────────────────────────────────────────────────
app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
