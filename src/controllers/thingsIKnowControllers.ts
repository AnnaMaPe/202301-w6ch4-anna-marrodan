import { type Request, type Response } from "express";
import { knwonThings } from "../data/data.js";

export const getKnownThings = (req: Request, res: Response) => {
  res.status(200).json({ knwonThings });
};

export const getKnownThingById = (req: Request, res: Response) => {
  const { id } = req.params;
  const knownThing = knwonThings.find((thing) => thing.id === +id);

  res.status(200).json({ knownThing });
};

export const deleterKnownThingsById = (req: Request, res: Response) => {
  const { id } = req.params;
  knwonThings.splice(+id - 1, 1);

  res.status(201).json({ knwonThings });
};
