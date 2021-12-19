import { NextFunction, Request, Response } from "express";

const webhookRPC = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let message: string = req.body.message;

    if (!req.body.message) {
      return res.status(422).json({ error: "message must be set" });
    }

    message = message.replace(/\{\{\s*firstname\s*\}\}/, "Lukas");
    message = message.replace(/\{\{\s*lastname\s*\}\}/, "Bauer");

    return res.status(200).json({ message });
  } catch (e) {
    console.error(e);
    return res.status(500);
  }
};

export default { webhookRPC };
