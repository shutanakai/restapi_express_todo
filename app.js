const express = require("express");
const app = express();
const taskRoutes = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

app.use(express.json());

const PORT = 3000;

app.use("/api/v1/tasks", taskRoutes);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT);
  } catch (err) {
    console.log(err);
  }
};

start();
