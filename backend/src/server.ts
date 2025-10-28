import express from "express";
import cors from "cors";
import { errorHandler } from "./middleware/errorHandler";
import weatherRoutes from "./routes/weatherRoutes";


 
const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use("/api/weather", weatherRoutes);
app.use(errorHandler); // має бути після роутів

app.listen(PORT, () => {
  console.log(`🌍 Server running on http://localhost:${PORT}`);
});
