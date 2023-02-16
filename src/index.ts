import "./loadEnvironment";
import * as dotenv from "dotenv";
import express from "express";

const app = express();

const port = process.env.PORT ?? 4000;

app.get("/", (req, res) => {
  res.json({});
});

app.listen(port);
