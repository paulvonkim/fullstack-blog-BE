import express from "express";
import cors from "cors";
import router from "./src/routes/posts.js";
import { configDotenv } from "dotenv";

configDotenv();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/api/v1/posts", router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
