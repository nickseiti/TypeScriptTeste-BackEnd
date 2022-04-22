import { Request, Response } from "express";
import EmailsService from "../services/EmailService";

const users = [
  {
    name: "Nicholas Seiti",
    email: "nicholasseiti@hotmail.com",
  },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const email = new EmailsService();

    email.sendMail({
      to: users[0],
      message: {
        subject: "Primeiro teste de typescript",
        body: "Estou ficando sem ideia do que colocar de mensagem",
      },
    });

    return res.send();
  },
};
