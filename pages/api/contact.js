import { check, validationResult } from "express-validator";
import { transport } from "../../lib/helpers/ApiHelper";
import logger from "../../lib/helpers/Logger";
import { initMiddleware, validateMiddleware } from "../../lib/helpers/middlewares";

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport(transport);

const validateBody = initMiddleware(
    validateMiddleware(
        [check("subject").trim().escape(), check("email").trim().escape(), check("name").trim().escape(), check("message").trim().escape()],
        validationResult
    )
);

export default async function formHandler(req, res) {
    if (req.method === "POST") {
        await validateBody(req, res);

        const { subject, name, email, message } = req.body;
        try {
            const mail = {
                from: `"Kapcsolat – ${name}" "kovalikadam00@gmail.com"`,
                to: process.env.NODE_ENV == "production" ? "buszrendeles@contibus.hu" : "Kovalik.adam.86@unibge.hu",
                subject: `Kapcsolat > contibus.hu ${subject ? "| " + subject : ""}`,
                replyTo: email,
                html: ` <html><body style="text-align: center;">
                <h1>Kapcsolat űrlap a contibus.hu-n keresztül</h1>
                <hr>
                <p style="font-weight: bold;">Név:</p><p style="padding-bottom: 20px">${name}</p>
                <p style="font-weight: bold;">Email cím:</p><p style="padding-bottom: 20px">${email}</p>
                <p style="font-weight: bold;">Tárgy:</p><p style="padding-bottom: 20px">${subject || "Nincs"}</p>
                <br>
                <p style="font-weight: bold;">Üzenet:</p><p>${message}</p>
                </body>
                </html> `,
            };
            transporter.verify((error) => {
                if (error) {
                    logger("error", error);
                } else {
                    logger("email", "Pörgünk, megyünk, nyomjuk! (kapcsolat)");
                }
            });
            await transporter.sendMail(mail);
            logger("email", "elküldve (kapcsolat)");
            res.status(200).json({
                status: "success",
            });
        } catch (error) {
            logger("error", error);

            res.status(500).json({
                error: error,
            });
        }
    } else {
        res.send("Rossz helyen jarsz");
    }
    res.end();
}
