import mongoose from "mongoose";
import app from "./app";


const PORT: number | string = process.env.PORT || 5000;

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");

    app.listen(PORT, () => {
      console.log("server is running on Port: ", PORT, " => Line No: 12");
    });
    console.log("Mongoose is connected", " => Line No: 12");
  } catch (err) {
    console.dir(err);
  }
}

// database connection
main().catch((err) => console.dir(err));
