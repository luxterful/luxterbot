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
    return res.status(500).send();
  }
};

const getConfiguration = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const configResult = await configurationService.get();
    if (configResult) {
      return res.status(200).json(configResult);
    } else {
      return res.status(404).send();
    }
  } catch (e) {
    console.error(e);
    return res.status(500).send();
  }
};

export default { updateConfiguration, getConfiguration };
