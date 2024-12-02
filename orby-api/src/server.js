import express, { json } from "express";
import authRouter from "./routes/authRoutes.js";
import formRouter from "./routes/formRoutes.js";
import { connectDb } from "./config/database.js";
import cors from "cors";
import forumRouter from "./routes/forumRoutes.js";
import reportRouter from "./routes/reportRoutes.js";

const app = express();

connectDb();
app.use(json());
app.use(cors());
app.use(reportRouter);
app.use(authRouter);
app.use(formRouter);
app.use(forumRouter);

const port = process.env.PORT;
app.listen(port, () => console.log(`Server listening in port ${port}`));
