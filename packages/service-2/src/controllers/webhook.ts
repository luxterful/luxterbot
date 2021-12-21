import { NextFunction, Request, Response } from "express";
import { Message } from "service-1";

const webhookRPC = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const body: Message = req.body;
    let message: string = body.message;

    message = message.replace(/\{\{\s*firstname\s*\}\}/, "Lukas");
    message = message.replace(/\{\{\s*lastname\s*\}\}/, "Bauer");

    return res.status(200).json({ message });
  } catch (e) {
    console.error(e);
    return res.status(500);
  }
};

export default { webhookRPC };
