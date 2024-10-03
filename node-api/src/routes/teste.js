import { Router } from "express";

const transactionRouter = Router();

transactionRouter.get("/teste", (req, res) => {
  res.send("Hello World!");
});

export default transactionRouter;
