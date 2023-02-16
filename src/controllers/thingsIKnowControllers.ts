import { type Request, type Response } from "express";
import { knownThings } from "../data/data.js";
import { type ThingStructure } from "../data/types.js";

export const getKnownThings = (req: Request, res: Response) => {
  res.status(200).json({ knwonThings: knownThings });
};

export const getKnownThingById = (req: Request, res: Response) => {
  const { id } = req.params;
  const knownThing = knownThings.find((thing) => thing.id === +id);

  if (!knownThing) {
    res.status(404).json({ error: "id not found" });
    return;
  }

  res.status(200).json({ knownThing });
};

export const deleteKnownThingsById = (req: Request, res: Response) => {
  const { id } = req.params;
  knownThings.splice(+id - 1, 1);

  res.status(200).json({ knwonThings: knownThings });
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

  knownThings.push({ ...newKnownThing, id: Date.now() });
  res.status(200).json({ knwonThings: knownThings });
};
