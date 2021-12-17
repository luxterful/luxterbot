import { Configuration } from "@/types/configuration";
import { NextFunction, Request, Response } from "express";
import { MongoClient, ObjectId } from "mongodb";

const mongoUri = "mongodb://root:example@localhost:27017/";
const client = new MongoClient(mongoUri);

const updateConfiguration = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // get some posts
  const config: Configuration = req.body;

  try {
    await client.connect();

    const database = client.db("luxterbot");
    const configurations = database.collection("configurations");

    const configResult = await configurations.updateOne(
      {
        _id: new ObjectId(config._id),
      },
      {
        $set: {
          webhookUrl: config.webhookUrl,
          webhookSecret: config.webhookSecret,
        },
      }
    );

    return res.status(200).json(configResult);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "update failed" });
  }
};

export default { updateConfiguration };
