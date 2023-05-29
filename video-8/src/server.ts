import mongoose from "mongoose";
import app from "./app";

const port: string | number = process.env.PORT || 5000;
const runServer = async () => {
  console.log("running server", " => Line No: 12");
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/primaCollection");

    console.log("Mongoose is connected");

    app.listen(port, () =>
      console.log("mongoose is connected and app is listening on port: ", port)
    );
  } catch (error) {
    console.dir(error);
  }
};
runServer();
console.log("running server", " => Line No: 15");
