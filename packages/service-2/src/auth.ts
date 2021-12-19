import { NextFunction, Request, Response } from "express";

export const auth = () => (req: Request, res: Response, next: NextFunction) => {
  const apiKey = req.headers["x-api-key"];
  if (apiKey === "supersecretapikey") {
    next();
  } else {
    return res.status(403).send();
  }
};
