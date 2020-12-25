import nodemailer from "nodemailer";
import { initMiddleware, validateMiddleware } from "@/lib/middlewares";
import { check, validationResult } from "express-validator";

const validateBody = initMiddleware(
  validateMiddleware(
    [
      check("name").isLength({ min: 2, max: 40 }),
      check("subject").isLength({ min: 3, max: 100 }),
      check("email").isEmail(),
      check("message").isLength({ min: 5, max: 255 }),
    ],
    validationResult
  )
);

export default async (req, res) => {
  try {
    switch (req.method) {
      case "POST":
        await validateBody(req, res);

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
          return res.status(422).json({ errors: errors.array() });
        }

        const transportObject = {
          host: process.env.SMTP_HOST,
          port: parseInt(process.env.SMTP_PORT) || 587,
          secure: process.env.NODE_ENV === "production",
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        };
        const transporter = nodemailer.createTransport(transportObject);

        const { name, subject, email, message } = req.body;

        const result = await transporter.sendMail({
          from: process.env.MAIL_FROM,
          to: process.env.MAIL_TO,
          subject: `${name} - ${subject}`,
          text: `${message} \n ${email}`,
        });

        console.log("RESULT ", result);

        res.status(201).json({ success: true, message: "Email ok" });
        break;

      default:
        res.status(404).json({ message: "Request HTTP Method not supported." });
        break;
    }
  } catch (error) {
    return res.status(501).json({ success: false, error });
  }
};
