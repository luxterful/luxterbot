import { MongoClient } from "mongodb";

const mongoUri = "mongodb://root:example@localhost:27017/";
const client = new MongoClient(mongoUri, { serverSelectionTimeoutMS: 5000 });

export default client;
