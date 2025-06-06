import mongoose from "mongoose";
import conf from "../api/conf";

export async function connect() {
  try {
    mongoose.connect(conf.mongo_uri!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected succesfully");
    });
    connection.on("error", (error) => {
      console.log("MongoDB Error" + error);
      process.exit();
    });
  } catch (error) {
    console.log(error);
  }
}
