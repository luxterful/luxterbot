import { Message } from "@/types/message";
import axios from "axios";
import { NextFunction, Request, Response } from "express";
import { configurations as configurationService } from "../services/configurations";

const postMessages = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const reply = (message: string, sender: "bot" | "system") => {
    const _message: Message = { message, sender };
    res.status(200).json(_message);
  };

  const userMessage: Message = req.body;
  if (userMessage.message === "Botfriends should hire Lukas!") {
    return reply("Yes! That's so true!", "bot");
  }

  const botAnswer =
    "Hello, {{firstname}} {{lastname}}. Thanks for applying at BOTfriends. ";

  let configuration;
  try {
    configuration = await configurationService.get();
  } catch (e) {
    console.error(e);
    return reply("Could not load webhook config.", "system");
  }

  // check if configuration is set in database
  if (configuration) {
    console.log("configuration found: ", configuration);

    try {
      const webhookResponse = await axios.post<Message>(
        configuration.webhookUrl,
        { message: botAnswer },
        {
          headers: {
            "x-api-key": configuration.webhookSecret,
          },
        }
      );

      return reply(webhookResponse.data.message, "bot");
    } catch (e: any) {
      console.error(e);

      if (e.code === "ECONNREFUSED") {
        return reply(
          "Error during webhook call. Connection refused.",
          "system"
        );
      } else if (e.response?.status === 403) {
        return reply(
          "Error during webhook call. Authorization error.",
          "system"
        );
      } else if (e.response?.status === 404) {
        return reply("Error during webhook call. Wrong webhook url.", "system");
      } else {
        return reply("Unknown error during webhook call.", "system");
      }
    }
  } else {
    return reply("Webhook data not set.", "system");
  }
};

export default { postMessages };
