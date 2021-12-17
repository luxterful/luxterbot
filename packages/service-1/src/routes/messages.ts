import express from "express";
import controller from "../controllers/messages";

const router = express.Router();

router.get("/", controller.getMessages);

export = router;
