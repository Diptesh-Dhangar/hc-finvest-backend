import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import blogRoutes from "./Routes/BlogRoutes.js";
import registrationRoutes from "./Routes/RegistrationRoutes.js"
import contactRoutes from "./Routes/ContactRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads")); // serve image files


// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // ✅ Connect to MongoDB

// app.use(express.static(path.join(__dirname, "../hc-finvest-website/build")));

// app.get(/.*/, (req, res) => {
//   res.sendFile(
//     path.join(__dirname, "../hc-finvest-website/build", "index.html")
//   );
// });

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("MongoDB Error:", err));

// ✅ Routes
app.use("/api/blogs", blogRoutes);
app.use("/api/register", registrationRoutes);
app.use("/api/contact", contactRoutes);

// ✅ Default route
app.get("/", (req, res) => {
  res.send("Welcome to the Blog API 🚀");
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
