import cors from "cors";
import express, { Request, Response, NextFunction } from "express";
import errorModel from "./1-models/error-model";
import ItemRouter from "./4-controllers/item-controller";
import catchAll from "./5-middleware/catchAll";
import config from "./6-utils/config";
import mySql_init from "./6-utils/init";

const server = express();

mySql_init();

server.use(cors());
server.use(express.json());
server.use("/api/items", ItemRouter);
server.use("*", (Request: Request, response: Response, next: NextFunction) => {
  next(new errorModel(404, "route not found!"));
});
server.use(catchAll);
server.listen(config.port, () =>
  console.log("listening on port " + config.port)
);
