export const transport = {
    host: "smtp.sendgrid.net",
    port: 465,
    auth: {
        user: process.env.NEXT_PUBLIC_SENDGRID_USER,
        pass: process.env.NEXT_PUBLIC_SENDGRID_PASS,
    },
};
