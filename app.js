const express = require("express");
const cors = require("cors");
const app = express();
const taskRoutes = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:4000',
  credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
  optionsSuccessStatus: 200 //レスポンスstatusを200に設定
}))

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
