import { MongoDBEntity } from "./mongodb";

interface Configuration extends MongoDBEntity {
  webhookUrl: string;
  webhookSecret: string;
}
