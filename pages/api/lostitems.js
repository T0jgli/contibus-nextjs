import { transport } from "../../lib/helpers/ApiHelper";
import logger from "../../lib/helpers/Logger";
import db from "../../lib/firebase";
import firebase from "firebase/app";
import { initMiddleware, validateMiddleware } from "../../lib/helpers/middlewares";
import { check, validationResult } from "express-validator";

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport(transport);

const validateBody = initMiddleware(
    validateMiddleware(
        [
            check("name").trim().escape(),
            check("phone").trim().escape(),
            check("email").trim().escape(),
            check("date").trim().escape(),
            check("bus").trim().escape(),
            check("desc").trim().escape(),
            check("comment").trim().escape(),
        ],
        validationResult
    )
);

export default async function formHandler(req, res) {
    if (req.method === "POST") {
        await validateBody(req, res);

        const { name, phone, email, date, bus, desc, comment, newsletterlost } = req.body;
        let success = false;
        try {
            const mail = {
                from: `"Elveszett tárgyak – ${name}" "kovalikadam00@gmail.com"`,
                to: process.env.NODE_ENV == "production" ? "buszrendeles@contibus.hu" : "tojgli12@gmail.com",
                subject: "Elveszett tárgy > contibus.hu",
                replyTo: email,
                html: ` <html><body style="text-align: center;">
                <h1>Elveszett tárgy űrlap a contibus.hu-n keresztül</h1>
                <hr>
                <p style="font-weight: bold;">Utas neve:</p><p style="padding-bottom: 20px">${name}</p>
                <p style="font-weight: bold;">Utas telefonszáma:</p><p style="padding-bottom: 20px">${phone}</p>
                <p style="font-weight: bold;">Utas email címe:</p><p style="padding-bottom: 20px">${email}</p>
                <p style="font-weight: bold;">Utazás dátuma:</p><p style="padding-bottom: 20px">${date}</p>
                <p style="font-weight: bold;">Busz:</p><p style="padding-bottom: 20px">${bus}</p>
                <p style="font-weight: bold;">Tárgy leírása:</p><p style="padding-bottom: 20px">${desc}</p>
                <br>
                <p style="font-weight: bold;">Egyéb megjegyzés:</p><p>${comment}</p>
                </body>
                </html> `,
            };
            transporter.verify((error) => {
                if (error) {
                    logger("error", error);
                } else {
                    logger("email", "Pörgünk, megyünk, nyomjuk! (elveszett tárgyak)");
                }
            });
            await transporter.sendMail(mail);
            success = true;
            logger("email", "elküldve (elveszett tárgyak)");

            res.status(200).json({
                status: "success",
            });
        } catch (error) {
            logger("error", error);

            res.status(500).json({
                error: "Error",
            });
        } finally {
            db.collection("lostitemusers").add({
                name: name,
                phone: phone,
                email: email,
                date: date,
                bus: bus,
                desc: desc,
                sent: success,
                comment: comment,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });

            if (newsletterlost) {
                db.collection("newsletterusers").doc(email).set({
                    name: name,
                    phone: phone,
                    email: email,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                });
            }
        }
    } else {
        res.send("Rossz helyen jarsz");
    }
    res.end();
}
