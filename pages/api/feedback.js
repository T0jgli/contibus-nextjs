import logger from "../../lib/helpers/Logger";
import db from "../../lib/firebase";
import firebase from "firebase/app";

export default async function formHandler(req, res) {
    if (req.method === "POST") {
        const { value, label, textareavalue } = req.body;
        try {
            await db.collection("feedbacks").add({
                feedbackstar: value,
                feedbacktext: label,
                details: textareavalue,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
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
