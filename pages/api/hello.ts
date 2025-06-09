import express from "express";
import mongoose from "mongoose";

const app = express();

// 数据库连接字符串
const dbURI = "mongodb://localhost:27017/simple";

// 连接数据库
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
