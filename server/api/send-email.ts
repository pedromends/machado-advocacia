import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: "smtp.mailgun.org",
    port: "465",
    auth: {
        user: process.env.USER,
        pass: process.env.PASS,
    }
})

export default defineEventHandler(async event => {
    try {
        const body = await readBody(event)
        await transporter.sendMail({
            from: 'Starvis noreply@starvis.io',
            to: 'raphaelcorreabarbosa@hotmail.com',
            subject: 'Olá! Novo contato pelo site Starvis',
            text: body.info,
            html: body.info,
        });
        return {
            status: 200,
            statusMessage: 'OK'
          }
    } catch(e) {
        throw e;
    }
  })