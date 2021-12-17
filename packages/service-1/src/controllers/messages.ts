import { NextFunction, Request, Response } from "express";

interface Message {
  body: String;
}

const getMessages = async (req: Request, res: Response, next: NextFunction) => {
  // get some posts
  const message: Message = { body: "Foo Bar" };
  return res.status(200).json(message);
};

export default { getMessages };
