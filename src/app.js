import express from "express";
import cors from "cors";
import countryRoutes from "./routes/countryRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/countries", countryRoutes)

export default app;