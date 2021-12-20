import { MongoClient } from "mongodb";

const mongoUri = process.env.DATABASE_STRING!;
const client = new MongoClient(mongoUri, { serverSelectionTimeoutMS: 5000 });

export default client;
