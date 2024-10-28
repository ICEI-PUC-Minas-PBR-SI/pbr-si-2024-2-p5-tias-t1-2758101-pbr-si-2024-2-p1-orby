import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import {
  CreateThread,
  UpdateThread,
} from "../schemas/validation/ForumThread.js";
import { validationSchemaMiddleware } from "../middlewares/validationSchemaMiddleware.js";
import forumController from "../controllers/forumController.js";
import { CreateReplie } from "../schemas/validation/CreateThreadReplie.js";

const forumRouter = Router();

forumRouter.use(authMiddleware);

forumRouter.post(
  "/forum/thread",
  validationSchemaMiddleware(CreateThread),
  forumController.createThread
);

forumRouter.put(
  "/forum/:threadId",
  validationSchemaMiddleware(UpdateThread),
  forumController.changeThread
);

forumRouter.get("/forum/threads", forumController.findAllThreads);

forumRouter.post(
  "/forum/:threadId/replie",
  validationSchemaMiddleware(CreateReplie),
  forumController.createReplie
);

forumRouter.get("/forum/:threadId", forumController.findAllByThread);

export default forumRouter;
