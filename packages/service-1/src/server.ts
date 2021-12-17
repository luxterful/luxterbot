import cors from "cors";
import express, { Express } from "express";
import http from "http";
import morgan from "morgan";
import configurationsRoutes from "./routes/configuration";

const router: Express = express();

/** Logging */
router.use(morgan("dev"));
/** Parse the request */
router.use(express.urlencoded({ extended: false }));
/** Takes care of JSON data */
router.use(express.json());
/** Cross-Origin Resource Sharing */
router.use(cors());

/** Routes */
router.use("/configurations", configurationsRoutes);

/** Error handling */
router.use((req, res, next) => {
  return res.status(404).send();
});

/** Server */
const httpServer = http.createServer(router);
const PORT: number = 8081;
httpServer.listen(PORT, () =>
  console.log(`The server is running on port ${PORT}`)
);
