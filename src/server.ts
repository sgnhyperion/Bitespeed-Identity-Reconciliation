import express, { Request, Response } from "express";
import identifyRoutes from "./routes/identify.route";
import dotenv from "dotenv";

const app = express();
const PORT = 9000;

app.use(express.json());
dotenv.config();

app.use("/api/", identifyRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Server is running...");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
