import mongoose from "mongoose";

const dbConnect = () => {
  mongoose
    .connect("mongodb://localhost/E-Commerce", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => console.log("Connected to db".cyan.underline))
    .catch((error) => {
      console.log(`Error while connecting to db: ${error.message}`.red.bold);
      process.exit(1);
    });
};

export default dbConnect;
