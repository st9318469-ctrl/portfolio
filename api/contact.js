import nodemailer from 'nodemailer';

const allowedOrigins = (process.env.CLIENT_URLS || process.env.CLIENT_URL || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

function setCorsHeaders(req, res) {
  const origin = req.headers.origin;
  if (origin && (allowedOrigins.length === 0 || allowedOrigins.includes(origin))) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

export default async function handler(req, res) {
  setCorsHeaders(req, res);

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New message from ${name} - Portfolio`,
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
          <p style="color:#334155;line-height:1.6">${String(message).replace(/\n/g, '<br/>')}</p>
        </div>
      `,
    });

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
          <p style="color:#334155;line-height:1.6">- Sachin Thakor</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Email error:', err);
    return res.status(500).json({ error: 'Failed to send email. Please try again.' });
  }
}
