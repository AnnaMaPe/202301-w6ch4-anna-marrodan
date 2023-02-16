import { Router } from "express";
import {
  getKnownThingById,
  getKnownThings,
} from "../controllers/thingsIKnowControllers.js";

// eslint-disable-next-line new-cap
export const thingsRouter = Router();

thingsRouter.get("/", getKnownThings);
thingsRouter.get("/:id", getKnownThingById);
