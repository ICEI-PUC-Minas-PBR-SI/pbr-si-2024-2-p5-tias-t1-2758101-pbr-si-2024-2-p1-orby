import { Router } from "express";
import reportController from "../controllers/reportController.js";

const reportRouter = Router();

reportRouter.get("/report/users", reportController.generateUsersReport);

export default reportRouter;
