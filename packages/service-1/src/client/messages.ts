import { Message } from "@/types/message";
import { AxiosInstance } from "axios";

export const postMessage =
  (client: AxiosInstance) =>
  async (message: Message): Promise<Message> => {
    const response = await client.post<Message>("/messages", message);
    return response.data;
  };
