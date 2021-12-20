import { NextFunction, Request, Response } from "express";

export const auth = () => (req: Request, res: Response, next: NextFunction) => {
  const apiKey = req.headers["x-api-key"];
  if (process.env.SECRET && apiKey === process.env.SECRET) {
    next();
  } else {
    return res.status(403).send();
  }
};
