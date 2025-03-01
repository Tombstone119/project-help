const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// const cors = require("cors");
const productsRoute = require("./src/routes/productRoute.ts");
const app = express();

dotenv.config();

// Connect to MongoDB
const URL = process.env.MONGODB_URL;
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

// Routes -->
// app.use(cors());
// app.use(bodyParser.json());

app.get("/", (_, res) => {
  res.send("Backend API");
});
app.use("/api", productsRoute);

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
