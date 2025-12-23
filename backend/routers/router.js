import express from "express"
const router = express.Router()
import { datafill_SUB } from "../controllers/controller.js";
import { datafill } from '../controllers/controller.js'
import { getinfo } from "../controllers/controller.js";

router.post("/datafill", datafill);

router.post("/datafill_SUB", datafill_SUB);

router.get("/getinfo", getinfo);

export default router;