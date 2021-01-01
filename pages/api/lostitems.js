import { transport } from '../../lib/ApiHelper';

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(transport)

transporter.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Pörgünk, megyünk, nyomjuk! (elveszett tárgyak)');
    }
});

export default function formHandler (req, res) {
    if (req.method === "POST" && req.body) {
        const mail = {
            from: '"Elveszett tárgyak" elveszetttargyak@contibus.hu',
            to: 'tojgli12@gmail.com',
            subject: 'Elveszett tárgy > contibus.hu',
            html: ` <html><body style="text-align: center;">
              <h1>Elveszett tárgy űrlap a contibus.hu-n keresztül</h1>
              <hr>
              <p style="font-weight: bold;">Utas neve:</p><p style="padding-bottom: 20px">${req.body.name}</p>
              <p style="font-weight: bold;">Utas telefonszáma:</p><p style="padding-bottom: 20px">${req.body.email}</p>
              <p style="font-weight: bold;">Utas email címe:</p><p style="padding-bottom: 20px">${req.body.email}</p>
              <p style="font-weight: bold;">Utazás dátuma:</p><p style="padding-bottom: 20px">${req.body.date}</p>
              <p style="font-weight: bold;">Busz:</p><p style="padding-bottom: 20px">${req.body.bus}</p>
              <p style="font-weight: bold;">Tárgy leírása:</p><p style="padding-bottom: 20px">${req.body.desc}</p>
              <br>
              <p style="font-weight: bold;">Egyéb megjegyzés:</p><p>${req.body.comment}</p>
            </body>
            </html> `
        }
        transporter.sendMail(mail, (err, data) => {
            if (err) {
                console.err(err)
                res.json({
                    status: 'fail'
                })
            } else {
                console.log(data, err)
                res.json({
                    status: 'success'
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