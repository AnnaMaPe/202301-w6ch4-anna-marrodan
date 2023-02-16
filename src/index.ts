import "./loadEnvironment.js";
import express from "express";

const app = express();

const port = process.env.PORT ?? 4000;

app.get("/things", (req, res) => {
  res.status(200).json({ pong: true });
});

app.listen(port);
