import axios from "axios";
import { NextFunction, Request, Response } from "express";
import { configurations as configurationService } from "../services/configurations";

interface Message {
  message: String;
}

const postMessages = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const answer =
    "Hello, {{firstname}} {{lastname}}.Thanks for applying at BOTfriends. ";

  const configuration = await configurationService.get();

  if (configuration) {
    console.log("configuration found: ", configuration);

    try {
      const webhookResponse = await axios.post(
        configuration.webhookUrl,
        { message: answer },
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
