// Import necessary modules
import { MongoClient, ObjectId } from "mongodb";

// Define a function to connect to the MongoDB database
async function connectToDatabase() {
  const client = new MongoClient(process.env.PAYMENTS_DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  return client; // Return the MongoClient instance directly
}

export default async function handler(req, res) {}
