import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import formController from "../controllers/formController.js";

const formRouter = Router();

formRouter.use(authMiddleware);

formRouter.post("/form/step/:step", formController.getFormStep);

export default formRouter;
