import express from "express";
import controller from "../controllers/configuration";

const router = express.Router();

router.get("/", controller.getConfiguration);
router.put("/", controller.updateConfiguration);

export = router;
