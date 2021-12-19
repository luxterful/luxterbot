import { Configuration } from "@/types/configuration";
import client from "./database";

const getConfigurationCollection = () =>
  client.db("luxterbot").collection("configurations");

const get = async (): Promise<Configuration | null> => {
  try {
    await client.connect();

    const configurations = getConfigurationCollection();

    const configResult = await configurations.findOne<Configuration>({});

    return configResult;
  } catch (e) {
    console.error("Database error:", e);
    throw e;
  } finally {
    await client.close();
  }
};

const update = async (config: Configuration) => {
  try {
    await client.connect();

    const configurations = getConfigurationCollection();

    const configResult = await configurations.updateOne(
      {},
      {
        $set: {
          webhookUrl: config.webhookUrl,
          webhookSecret: config.webhookSecret,
        },
      },
      {
        upsert: true,
      }
    );

    return configResult;
  } catch (e) {
    console.error("Database error:", e);
    throw e;
  } finally {
    await client.close();
  }
};

export const configurations = { get, update };
