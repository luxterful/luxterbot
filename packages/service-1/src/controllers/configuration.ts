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

  let webhookUrl;

  // only valid urls should be accepted as webhook urls
  // only luxterful.eu and localhost is allowed as host
  try {
    webhookUrl = new URL(config.webhookUrl);

    if (
      !webhookUrl.host.endsWith("luxterful.eu") &&
      !webhookUrl.hostname.endsWith("localhost")
    ) {
      return res.status(500).send({ error: "Wrong host." });
    }
  } catch (e) {
    return res.status(500).send({ error: "webhookUrl could not be parsed" });
  }

  try {
    await configurationService.update({
      webhookUrl: webhookUrl.href,
      webhookSecret: config.webhookSecret,
    });
  } catch (e) {
    return res
      .status(500)
      .send({ error: "failed to write configuration to database" });
  }

  try {
    const configuration = await configurationService.get();
    return res.status(200).json(configuration);
  } catch (e) {
    return res.status(500).send({
      error:
        "configuration written to database but new data could not be retreived",
    });
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
      const emptyConfig: Configuration = { webhookSecret: "", webhookUrl: "" };
      return res.status(200).send(emptyConfig);
    }
  } catch (e) {
    console.error(e);
    return res.status(500).send();
  }
};

export default { updateConfiguration, getConfiguration };
