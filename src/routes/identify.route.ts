import { Router, Request, Response } from "express";
import { identifyPerson } from "../controllers/identify.controller";

const router = Router();

router.get("/identify", identifyPerson);

export default router;