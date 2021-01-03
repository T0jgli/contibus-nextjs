export const transport = {
    host: "smtp-relay.sendinblue.com",
    port: 587,
    auth: {
        user: process.env.NEXT_PUBLIC_SENDINBLUE_USER,
        pass: process.env.NEXT_PUBLIC_SENDINBLUE_PASS
    }
}