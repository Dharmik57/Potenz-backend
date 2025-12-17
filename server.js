import express from "express";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import dotenv from "dotenv";

dotenv.config();
connectDB();


const app = express();
app.use(express.json());
app.use("/uploads", express.static("uploads"));


app.use("/api/auth", authRoutes);
app.use("/api/applications", applicationRoutes);


app.listen(5000, () => console.log("Server running on port 5000"));