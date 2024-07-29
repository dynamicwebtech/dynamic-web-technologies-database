// Import necessary modules
import { MongoClient, ObjectId } from "mongodb";

// Define a function to connect to the MongoDB database
async function connectToDatabase() {
  const client = new MongoClient(process.env.USERS_DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  return client; // Return the MongoClient instance directly
}

export default async function handler(req, res) {
  if (req.method === "GET") {
    const client = await connectToDatabase();
    const db = client.db("user-storage");
    const collection = db.collection("users");

    try {
      // Fetching all the users
      const data = await collection.find({}).toArray();

      // Closing the connection
      await client.close();

      return res.status(200).json(data);
    } catch (error) {
      await client.close();

      return res.status(500).json({ error: "Internal Server Error" });
    } finally {
      if (client) {
        await client.close();
      }
    }
  } else {
    // If the request method is not GET, respond with method not allowed
    return res.status(405).json({ error: "Method not allowed" });
  }
}
