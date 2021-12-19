import { MongoDBEntity, MongoDBEntityDTO } from "./mongodb";

export interface Configuration extends MongoDBEntity {
  webhookUrl: string;
  webhookSecret: string;
}

export interface ConfigurationDTO extends MongoDBEntityDTO {
  webhookUrl: string;
  webhookSecret: string;
}
