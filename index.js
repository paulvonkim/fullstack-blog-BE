import express from "express";
import dotenv from "dotenv";
import queryDB from "./db.js";

dotenv.config();

const PORT = process.env.PORT;
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.json({ message: "Server is running!" });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
