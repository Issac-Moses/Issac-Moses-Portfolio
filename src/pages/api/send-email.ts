import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  // Configure the email transport
  const transporter = nodemailer.createTransport({
    service: "Gmail", // Change if using another email provider
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your email app password
    },
  });

  // The message (your code)
  const mailOptions = {
    from: `"Moses Sir" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Your Requested Code",
    text: `Here is the requested code:\n\nconst exampleFunction = () => console.log("Hello, World!");`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to send email", error });
  }
}
