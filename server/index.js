import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import ConnectDb from "./mongoDB/connect.js";

import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dall-ERoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);
app.get("/", async (req, res) => {
  res.send("Hello from DALL-E");
});

ConnectDb(process.env.MONGODB_URL);
app.listen(8080, () => {
  console.log("Server has started on port http:localhost:8080");
});

// if (true) {
//   console.log("error");
// }
