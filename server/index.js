import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import ConnectDb from "./mongoDB/connect.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", async (req, res) => {
  res.send("Hello from DALL-E");
});

ConnectDb(process.env.MONGODB_URL);
app.listen(8080, () => {
  console.log("Server has started on port http:localhost:8080");
});
