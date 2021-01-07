import { transport } from '../../lib/ApiHelper';

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(transport)

transporter.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Pörgünk, megyünk, nyomjuk! (ajánlatkérés)');
    }
});

export default function formHandler (req, res) {
    if (req.method === "POST" && req.body) {
        const mail = {
            from: '"Ajánlatkérés" ajanlat@contibus.hu',
            to: 'buszrendeles@contibus.hu',
            subject: 'Autóbusz ajánlat kérés > contibus.hu',
            html: ` <html><body style="text-align: center;">
          <h1>Ajánlatkérő űrlap a contibus.hu-n keresztül</h1>
          <hr>
          <p style="font-weight: bold;">Megrendelő neve:</p><p style="padding-bottom: 20px">${req.body.name}</p>
          <p style="font-weight: bold;">Telefonszám:</p><p style="padding-bottom: 20px">${req.body.phone}</p>
          <p style="font-weight: bold;">Email cím:</p><p style="padding-bottom: 20px">${req.body.email}</p>
          <p style="font-weight: bold;">Úticél:</p><p style="padding-bottom: 20px">${req.body.uticel}</p>
          <p style="font-weight: bold;">Tervezett költségkeret:</p><p style="padding-bottom: 20px">${req.body.koltseg}</p>
          <p style="font-weight: bold;">Indulás napja:</p><p style="padding-bottom: 20px">${req.body.indulas}</p>
          <p style="font-weight: bold;">Érkezés napja:</p><p style="padding-bottom: 20px">${req.body.erkezes}</p>
          <p style="font-weight: bold;">Kiválasztott busz:</p><p style="padding-bottom: 20px">${req.body.selectedbus ? req.body.selectedbus : ("Nincs")}</p>
          <p style="font-weight: bold;">Férőhely:</p><p style="padding-bottom: 20px">${req.body.seat}</p>
          <br>
          <p style="font-weight: bold;">Rövid leírás:</p><p>${req.body.comment}</p>
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