export const transport = {
    host: "mail.kvlk.hu",
    port: 465,
    auth: {
        user: process.env.NEXT_PUBLIC_SENDGRID_USER,
        pass: process.env.NEXT_PUBLIC_SENDGRID_PASS,
    },
};
