import { Configuration } from "@/types/configuration";
import { AxiosInstance } from "axios";

export const getConfiguration =
  (client: AxiosInstance) => async (): Promise<Configuration> => {
    const response = await client.get<Configuration>("/configurations");
    return response.data;
  };

export const updateConfiguration =
  (client: AxiosInstance) =>
  async (configuration: Configuration): Promise<Configuration> => {
    const response = await client.put<Configuration>(
      "/configurations",
      configuration
    );
    return response.data;
  };
