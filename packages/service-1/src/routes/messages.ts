import express from "express";
import controller from "../controllers/messages";

const router = express.Router();

router.post("/", controller.postMessages);

export = router;
