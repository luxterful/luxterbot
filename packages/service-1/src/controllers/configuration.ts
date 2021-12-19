import { Configuration } from "@/types/configuration";
import { NextFunction, Request, Response } from "express";
import { configurations as configurationService } from "../services/configurations";

const updateConfiguration = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // get some posts
  const config: Configuration = req.body;

  try {
    const configResult = await configurationService.update({
      webhookUrl: config.webhookUrl,
      webhookSecret: config.webhookSecret,
    });

    return res.status(200).json(configResult);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "update failed" });
  }
};

const getConfiguration = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const configResult = await configurationService.get();

    return res.status(200).json(configResult);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "get failed" });
  }
};

export default { updateConfiguration, getConfiguration };
