import axios from "axios";
import { getConfiguration, updateConfiguration } from "./configurations";
import { postMessage } from "./messages";

export const apiClient = (baseURL: string) => {
  const client = axios.create({ baseURL });

  return {
    getConfiguration: getConfiguration(client),
    updateConfiguration: updateConfiguration(client),
    postMessage: postMessage(client),
  };
};

export * from "@/types/index";
