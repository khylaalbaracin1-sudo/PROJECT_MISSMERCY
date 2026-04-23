const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
    const { name, email, subject, message } = req.body;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'khylaalbaracin1@gmail.com',
            pass: 'your-app-password' // generate Gmail App Password
        }
    });

    await transporter.sendMail({
        from: email,
        to: 'khylaalbaracin1@gmail.com',
        subject: subject || 'New Contact Form Message',
        text: `From: ${name} (${email})\n\n${message}`
    });

    res.json({ status: 'success' });
});

app.listen(3000, () => console.log('Server running on port 3000'));
