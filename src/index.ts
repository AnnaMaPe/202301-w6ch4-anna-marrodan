import "./loadEnvironment.js";
import express from "express";
import getThingsIKnow from "./controllers/thingsIKnowControllers.js";

const app = express();
const port = process.env.PORT ?? 4000;

app.get("/things", getThingsIKnow);

app.listen(port);
