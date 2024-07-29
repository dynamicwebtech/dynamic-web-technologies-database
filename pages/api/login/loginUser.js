// Import necessary modules
import { MongoClient, ObjectId } from "mongodb";
import bcrypt from "bcrypt";

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
  if (req.method === "POST") {
    const { loginEmail, loginPassword } = req.body;

    // Validate the form fields
    if (!loginEmail || !loginPassword) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    // Connecting to the Users DB
    const client = await connectToDatabase();
    const db = client.db("user-storage");
    const collection = db.collection("users");

    try {
      // Fetching the user with the provided email
      const user = await collection.findOne({ email: loginEmail });

      // If not found..
      if (!user) {
        await client.close();

        return res.status(401).json({ error: "Invalid email.." });
      }

      // Comparing the password with the hashed password
      const userPassword = await bcrypt.compare(loginPassword, user.password);

      if (!userPassword) {
        await client.close();

        return res.status(401).json({ error: "Invalid password.." });
      }

      await client.close();

      return res.status(200).json({ message: "User logged in!!" });
    } catch (error) {
      // Handle any errors that occur during the fetch
      await client.close();
      return res.status(500).json({ error: "Internal server error" });
    } finally {
      if (client) {
        await client.close();
      }
    }
  } else {
    // If the request method is not POST, respond with method not allowed
    return res.status(405).json({ error: "Method not allowed" });
  }
}
