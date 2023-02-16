import { type Request, type Response } from "express";
import { thingsIKnow } from "../data/data.js";

export const getThingsIKnow = (req: Request, res: Response) => {
  res.status(200).json({ thingsIKnow });
};

export const getThingIKnowById = (req: Request, res: Response) => {
  const { id } = req.params;
  const thingIKnow = thingsIKnow.find((thing) => thing.id === +id);

  res.status(200).json({ thingIKnow });
};
