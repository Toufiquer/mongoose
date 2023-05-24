import mongoose from "mongoose";

import app from "./app";
const port: number = 5000;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/firstCollection");

  app.listen(port, () => console.log("Listening on port " + port));

  console.log("Mongoose is running", " => Line No: 11");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
