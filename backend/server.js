import dotenv from "dotenv";
import colors from "colors";
import dbConnect from "./config/database.js";
import express from "express";
import { notFound, errorHandler } from "./middlware/errorHandler.js";
import productRoutes from "./routes/productRoutes.js";
const app = express();

dbConnect();
dotenv.config();
app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);
app.listen(
  process.env.PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on ${process.env.PORT}`
      .yellow.bold
  )
);
