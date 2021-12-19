import cors from "cors";
import express, { Express } from "express";
import http from "http";
import morgan from "morgan";
import { auth } from "./auth";
import webhook from "./controllers/webhook";

const router: Express = express();

/** Logging */
router.use(morgan("dev"));
/** Parse the request */
router.use(express.urlencoded({ extended: false }));
/** Takes care of JSON data */
router.use(express.json());
/** Cross-Origin Resource Sharing */
router.use(cors());
/** Auth middleware */
router.use(auth());

/** Routes */
router.use("/webhook", webhook.webhookRPC);

/** Error handling */
router.use((req, res, next) => {
  return res.status(404).send();
});

/** Server */
const httpServer = http.createServer(router);
const PORT: number = 8082;
httpServer.listen(PORT, () =>
  console.log(`The server is running on port ${PORT}`)
);
