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
            check("uticel").trim().escape(),
            check("koltseg").trim().escape(),
            check("indulas").trim().escape(),
            check("erkezes").trim().escape(),
            check("selectedbus").trim().escape(),
            check("seat").trim().escape(),
            check("comment").trim().escape(),
        ],
        validationResult
    )
);

export default async function formHandler(req, res) {
    if (req.method === "POST") {
        await validateBody(req, res);

        const { name, phone, email, uticel, koltseg, indulas, erkezes, selectedbus, seat, comment, newsletter } = req.body;
        let success = false;
        try {
            const mail = {
                from: `"Ajánlatkérés – ${name}" "Kovalik.adam.86@unibge.hu"`,
                to: process.env.NODE_ENV == "production" ? "" : "tojgli12@gmail.com",
                subject: "Autóbusz ajánlat kérés > contibus.hu",
                /*attachments: req.body.file
                    ? [
                          {
                              filename: req.body.filename,
                              content: req.body.file,
                              encoding: "base64",
                          },
                      ]
                    : null,*/
                html: ` <html><body style="text-align: center;">
                <h1>Ajánlatkérő űrlap a contibus.hu-n keresztül</h1>
                <hr>
                <p style="font-weight: bold;">Megrendelő neve:</p><p style="padding-bottom: 20px">${name}</p>
                <p style="font-weight: bold;">Telefonszám:</p><p style="padding-bottom: 20px">${phone}</p>
                <p style="font-weight: bold;">Email cím:</p><p style="padding-bottom: 20px">${email}</p>
                <p style="font-weight: bold;">Úticél:</p><p style="padding-bottom: 20px">${uticel}</p>
                <p style="font-weight: bold;">Tervezett költségkeret:</p><p style="padding-bottom: 20px">${koltseg}</p>
                <p style="font-weight: bold;">Indulás napja:</p><p style="padding-bottom: 20px">${indulas}</p>
                <p style="font-weight: bold;">Érkezés napja:</p><p style="padding-bottom: 20px">${erkezes}</p>
                <p style="font-weight: bold;">Kiválasztott busz:</p><p style="padding-bottom: 20px">${selectedbus || "Nincs"}</p>
                <p style="font-weight: bold;">Férőhely:</p><p style="padding-bottom: 20px">${seat}</p>
                <br>
                <p style="font-weight: bold;">Rövid leírás:</p><p>${comment}</p>
                </body>
                </html> `,
            };
            transporter.verify((error) => {
                if (error) {
                    logger("error", error);
                } else {
                    logger("email", "Pörgünk, megyünk, nyomjuk! (ajánlatkérés)");
                }
            });
            await transporter.sendMail(mail);
            success = true;
            logger("email", "elküldve (ajánlatkérés)");

            res.status(200).json({
                status: "success",
            });
        } catch (error) {
            logger("error", error);

            res.status(500).json({
                error: "Error",
            });
        } finally {
            db.collection("formofferusers").add({
                name: name,
                phone: phone,
                email: email,
                uticel: uticel,
                koltseg: koltseg,
                indulas: new Date(indulas).toLocaleDateString(),
                erkezes: new Date(erkezes).toLocaleDateString(),
                selectedbus: selectedbus || "Nincs",
                seat: seat,
                comment: comment,
                sent: success,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });

            if (newsletter) {
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
