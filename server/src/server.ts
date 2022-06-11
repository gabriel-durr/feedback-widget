import express from "express";
import { prisma } from "./prisma";
import nodemailer from "nodemailer";

const app = express();

app.use(express.json());

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "635851cc47013f",
        pass: "80f79f8f6a7eff",
    },
});

app.post("/feedbacks", async (req, res) => {
    const { type, comment, screenshot } = req.body;

    const feedback = await prisma.feedback.create({
        data: {
            type,
            comment,
            screenshot,
        },
    });

    transport.sendMail({
        from: "gab.durr project <hi@feedget.com>",
        to: "Gabriel Durr <bield2r@gmail.com>",
        subject: "New Feedback",
        html: [
            `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
            `<p>Tipo do feedback: ${type}</p>`,
            `<p>Comentário: ${comment}</p>`,
            `</div>`,
        ].join("\n"),
    });

    return res.status(201).json({ data: feedback });
});

app.listen(3333, () => {
    console.log("HTTP Server running!");
});
