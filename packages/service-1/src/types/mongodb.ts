import { ObjectId } from "mongodb";

export interface MongoDBEntity {
  _id?: ObjectId;
}

export interface MongoDBEntityDTO {
  _id?: string;
}
