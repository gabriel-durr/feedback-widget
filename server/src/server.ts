import express from "express";
import { prisma } from "./prisma";
import nodemailer from "nodemailer";

const app = express();

app.use(express.json());

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "3d792b71cf6e5c",
        pass: "0f3e3de29e0ad7",
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
        from: "Gabriel Dürr <teste@feedget.com>",
        to: "Diego Fernandes <batata@gmail.com",
    });

    return res.status(201).json({ data: feedback });
});

app.listen(3333, () => {
    console.log("HTTP Server running!");
});
