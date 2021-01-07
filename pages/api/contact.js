import { transport } from '../../lib/ApiHelper';

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(transport)

transporter.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Pörgünk, megyünk, nyomjuk! (kapcsolat)');
    }
});

export default function formHandler (req, res) {
    if (req.method === "POST" && req.body) {
        const mail = {
            from: '"Kapcsolat" contact@contibus.hu',
            to: 'buszrendeles@contibus.hu',
            subject: `Kapcsolat > contibus.hu ${req.body.subject ? ("| " + req.body.subject) : ("")}`,
            html: ` <html><body style="text-align: center;">
              <h1>Kapcsolat űrlap a contibus.hu-n keresztül</h1>
              <hr>
              <p style="font-weight: bold;">Név:</p><p style="padding-bottom: 20px">${req.body.name}</p>
              <p style="font-weight: bold;">Email cím:</p><p style="padding-bottom: 20px">${req.body.email}</p>
              <p style="font-weight: bold;">Tárgy:</p><p style="padding-bottom: 20px">${req.body.subject ? req.body.subject : ("Nincs")}</p>
              <br>
              <p style="font-weight: bold;">Üzenet:</p><p>${req.body.message}</p>
            </body>
            </html> `
        }
        transporter.sendMail(mail, (err, data) => {
            if (err) {
                console.log(err)
                res.status(500).json({
                    error: err
                })
            } else {
                console.log(data)
                res.status(200).json({
                    status: "success"
                })
            }
        })
    }
    else {
        res.json({
            status: "success"
        })
    }
}