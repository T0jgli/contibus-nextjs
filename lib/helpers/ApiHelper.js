export const transport = {
    service: "gmail",
    auth: {
        user: process.env.NEXT_PUBLIC_SENDGRID_USER,
        pass: process.env.NEXT_PUBLIC_SENDGRID_PASS,
    },
};
