import mongoose from "mongoose";
import express from "express";
import cors from "cors";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");

    app.get("/", (req, res) => {
      res.send({ message: "hello world" });
    });

    console.log("Mongoose is connected", " => Line No: 12");
  } catch (err) {
    console.dir(err);
  }
}

// database connection
main().catch((err) => console.dir(err));

app.listen(PORT, () => {
  console.log("server is running on Port: ", PORT, " => Line No: 12");
});
