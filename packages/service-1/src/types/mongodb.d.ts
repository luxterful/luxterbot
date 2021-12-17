import { ObjectId } from "mongodb";

export interface MongoDBEntity {
  _id?: ObjectId;
}
