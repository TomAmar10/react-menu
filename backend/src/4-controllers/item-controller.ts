import { NextFunction, Request, Response, Router } from "express";
import ItemModel from "../1-models/item-model";
import logic from "../3-logic/item-logic";

const ItemRouter = Router();

ItemRouter.get(
  "/all",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const items = await logic.getAllItems();
      response.status(200).json(items);
    } catch (err) {
      next(err);
    }
  }
);

ItemRouter.get(
  "/:id",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const id = +request.params.id;
      const item = await logic.getItem(id);
      response.status(200).json(item);
    } catch (err) {
      next(err);
    }
  }
);

ItemRouter.post(
  "/all",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const addedItem = await logic.addItem(request.body);
      response.status(201).json(addedItem);
    } catch (err) {
      next(err);
    }
  }
);

ItemRouter.delete(
  "/:id",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const id = +request.params.id;
      await logic.deleteItem(id);
      response.sendStatus(204);
    } catch (err) {
      next(err);
    }
  }
);

ItemRouter.put(
  "/:id",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      request.body.id = +request.params.id;
      const newItem = await logic.updateFullItem(request.body);
      response.status(200).json(newItem);
    } catch (err) {
      next(err);
    }
  }
);

export default ItemRouter;
