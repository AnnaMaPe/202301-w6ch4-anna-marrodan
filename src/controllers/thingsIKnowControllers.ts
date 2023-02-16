import { type Request, type Response } from "express";
import { knwonThings } from "../data/data.js";
import { type ThingStructure } from "../data/types.js";

export const getKnownThings = (req: Request, res: Response) => {
  res.status(200).json({ knwonThings });
};

export const getKnownThingById = (req: Request, res: Response) => {
  const { id } = req.params;
  const knownThing = knwonThings.find((thing) => thing.id === +id);

  res.status(200).json({ knownThing });
};

export const deleteKnownThingsById = (req: Request, res: Response) => {
  const { id } = req.params;
  knwonThings.splice(+id - 1, 1);

  res.status(200).json({ knwonThings });
};

export const createKnownThings = (
  req: Request<
    Record<string, unknown>,
    Record<string, unknown>,
    ThingStructure
  >,
  res: Response
) => {
  const newKnownThing = req.body;

  knwonThings.push({ ...newKnownThing, id: Date.now() });
  res.status(200).json({ knwonThings });
};
