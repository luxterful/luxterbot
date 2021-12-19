import { Configuration } from "@/types/configuration";
import { MongoClient } from "mongodb";

const mongoUri = "mongodb://root:example@localhost:27017/";
const client = new MongoClient(mongoUri);

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
