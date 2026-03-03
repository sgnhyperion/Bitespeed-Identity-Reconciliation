import { Request, Response } from "express";

export const identifyPerson = (req: Request, res: Response) => {
    res.json({message: "Person identified"})
} 