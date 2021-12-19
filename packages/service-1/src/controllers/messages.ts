import axios from "axios";
import { NextFunction, Request, Response } from "express";
import { configurations as configurationService } from "../services/configurations";

const postMessages = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userMessage = req.body.message;
  if (userMessage === "Botfriends should hire Lukas!") {
    return res.status(200).json({ message: "Yes! That's so true!" });
  }

  const botAnswer =
    "Hello, {{firstname}} {{lastname}}. Thanks for applying at BOTfriends. ";

  let configuration;
  try {
    configuration = await configurationService.get();
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "could not load webhook config" });
  }

  // check if configuration is set in database
  if (configuration) {
    console.log("configuration found: ", configuration);

    try {
      const webhookResponse = await axios.post(
        configuration.webhookUrl,
        { message: botAnswer },
        {
          headers: {
            "x-api-key": configuration.webhookSecret,
          },
        }
      );

      return res.status(200).json(webhookResponse.data);
    } catch (e: any) {
      return res
        .status(500)
        .json({ error: "error during webhook call", detail: e.message });
    }
  } else {
    return res.status(500).json({ error: "webhook data not set" });
  }
};

export default { postMessages };
