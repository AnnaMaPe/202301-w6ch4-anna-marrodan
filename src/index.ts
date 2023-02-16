import "./loadEnvironment.js";
import express from "express";
import { getThingsIKnow } from "./controllers/thingsIKnowControllers.js";
import { getThingIKnowById } from "./controllers/thingsIKnowControllers.js";

const app = express();
const port = process.env.PORT ?? 4000;

app.get("/things", getThingsIKnow);
app.get("/things/:id", getThingIKnowById);

app.listen(port);
