import "./loadEnvironment.js";
import express from "express";
import { thingsRouter } from "./routes/router.js";

const app = express();
app.use(express.json());
const port = process.env.PORT ?? 4000;

app.use("/things", thingsRouter);

app.listen(port);
