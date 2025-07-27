// require ("dotenv").config({path: "./env"});
import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";
dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`⚙ Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB: !!", err);
  });

/*

import express from "express";
const app = express();
const PORT = process.env.PORT || 8000;
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("Connected to MongoDB");
    app.on("error", (err) => {
      console.log("Error occurred:", err);
      throw err;
    });

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });

  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
})();
*/
