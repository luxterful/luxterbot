import axios from "axios";
import { getConfiguration, updateConfiguration } from "./configurations";

export const apiClient = (baseURL: string) => {
  const client = axios.create({ baseURL });

  return {
    getConfiguration: getConfiguration(client),
    updateConfiguration: updateConfiguration(client),
  };
};

export * from "@/types/index";
