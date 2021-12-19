import express from "express";
import controller from "../controllers/webhook";

const router = express.Router();

router.post("/", controller.webhookRPC);

export = router;
