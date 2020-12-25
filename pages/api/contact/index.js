import nodemailer from "nodemailer";
import { initMiddleware, validateMiddleware } from "@/lib/middlewares";
import { check, validationResult } from "express-validator";

const validateBody = initMiddleware(
  validateMiddleware(
    [
      check["name"].isLength({ min: 2, max: 40 }),
      check("subject").isLength({ min: 3, max: 100 }),
      check("email").isEmail(),
      check("message").isLength({ min: 5, max: 255 }),
    ],
    validationResult
  )
);

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await validateBody(req, res);

      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT || 25,
        secure: process.env.NODE_ENV === "production", // upgrade later with STARTTLS
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const { name, subject, email, message } = req.body;

      const result = await transporter.sendMail({
        from: process.env.MAIL_FROM,
        to: process.env.MAIL_TO,
        subject: `${name} - ${subject}`,
        text: `${message} \n ${email}`,
      });

      console.log("RESULT ", result);
      break;

    default:
      res.status(404).json({ message: "Request HTTP Method not supported." });
      break;
  }
};

function validateContactFormData({ name, subject, email, message }) {
  const errors = {};
  if (name && subject && email && message) {
    if (!name || name.length === 0) {
      errors["name"] = "El nombre introducido no es válido o está vacío";
    }

    if (!subject || subject.length === 0) {
      errors["name"] = "El titulo introducido no es válido o está vacío";
    }

    if (!email || email.length === 0) {
      errors["name"] = "El email introducido no es válido o está vacío";
    }

    if (!message || message.length === 0) {
      errors["name"] = "El mensaje introducido no es válido o está vacío";
    }
  }

  return errors;
}
