import { Configuration } from "@/types/configuration";
import client from "./database";

const getConfigurationCollection = () =>
  client.db("luxterbot").collection("configurations");

const get = async (): Promise<Configuration | null> => {
  try {
    await client.connect();

    const configurations = getConfigurationCollection();

    // there should be only one configuration document
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
        // if there is no document a new one should be created
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
