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
    const { formEmail, formPassword, confirmPassword } = req.body;

    // Validate the form fields
    if (!formEmail || !formPassword || !confirmPassword) {
      return res.status(400).json({ error: "All fields are required.." });
    }

    if (formPassword !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match.." });
    }

    // Hashing the password
    const hashedPassword = await bcrypt.hash(formPassword, 10);

    // Connecting to the Users DB
    const client = await connectToDatabase();
    const db = client.db("user-storage");
    const collection = db.collection("users");

    try {
      // Inserting to Users DB
      const result = await collection.insertOne({
        email: formEmail,
        password: hashedPassword,
        createdAt: new Date(),
      });

      // Closing connection
      await client.close();

      return res.status(201).json({ message: "User created successfully!!" });
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
