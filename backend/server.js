import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import newRegistrationRoutes from "./Routes/newRegistrationRoutes.js";
import handicapMarriageRoutes from "./Routes/handicapMarriageRoutes.js";
import registrationRoutes from "./Routes/registrationRoutes.js"; // Fixed import
import searchRoutes from "./Routes/searchProfiles.js"; // ✅ New route for searching profiles

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/api/register", newRegistrationRoutes);
app.use("/api/handicap", handicapMarriageRoutes);
app.use("/api/registration", registrationRoutes);
app.use("/api/search", searchRoutes); // ✅ New search route added

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
