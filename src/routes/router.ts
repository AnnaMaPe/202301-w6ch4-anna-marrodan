import { Router } from "express";
import {
  deleterKnownThingsById,
  getKnownThingById,
  getKnownThings,
} from "../controllers/thingsIKnowControllers.js";

// eslint-disable-next-line new-cap
export const thingsRouter = Router();

thingsRouter.get("/", getKnownThings);
thingsRouter.get("/:id", getKnownThingById);
thingsRouter.delete("/:id", deleterKnownThingsById);
