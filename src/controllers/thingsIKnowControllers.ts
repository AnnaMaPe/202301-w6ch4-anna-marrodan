import { type Request, type Response } from "express";
import { thingsIKnow } from "../data/data.js";

const getThingsIKnow = (req: Request, res: Response) => {
  res.status(200).json({ thingsIKnow });
};

export default getThingsIKnow;
