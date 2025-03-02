import mongoose from "mongoose";
import express from "express";

import "dotenv/config";
// import dotenv from 'dotenv';
// dotenv.config();

import productsRoute from "./routes/productRoute.ts";
import usersRoute from "./routes/userRoute.ts";

const app = express();
// Connect to MongoDB
const URL = process.env.MONGODB_URL || "8081";
mongoose
  .connect(URL)
  .then(() => {
    const now = new Date().toLocaleString();
    console.log(`[${now}] ✅ MongoDB Connection Success!`);
  })
  .catch((err) => {
    const now = new Date().toLocaleString();
    console.error(`[${now}] ❌ MongoDB Connection Failed:`, err);
  });

// Middleware -->
app.use(express.json());

app.get("/", (_, res) => {
  res.send("Backend API");
});
app.use("/api", productsRoute);
app.use("/api", usersRoute);

// Start server -->
const PORT = process.env.PORT;
app
  .listen(PORT, () => {
    const now = new Date().toLocaleString();
    console.log(`[${now}] 🚀 Server is up and running on port number: ${PORT}`);
  })
  .on("error", (error) => {
    console.error(`Error occurred: ${error.message}`);
  });
