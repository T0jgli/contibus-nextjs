import { transport } from "../../lib/helpers/ApiHelper";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport(transport);

export default async (req, res) => {
    switch (req.method) {
        case "GET":
            try {
                const result = await transporter.verify();
                if (result) {
                    res.status(200).json({ message: "Success" });
                } else {
                    res.status(500).json({
                        message: result,
                    });
                }
            } catch (error) {
                res.status(500).json({
                    message: error,
                });
            }
            break;

        default:
            res.status(404).json({ message: "Request HTTP Method Incorrect." });

            break;
    }

    res.end();
};
