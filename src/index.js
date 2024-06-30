import express from "express";
import cors from "cors";
import methodOverride from "method-override";

import mongoConnect from "./client/mongoDBConnect.js";
import billRouter from  "./router/billRouter.js";
import userRouter from "./router/userRouter.js";

const {PORT}= process.env;

const app = express();

app.use(express.json());
app.use(cors());
app.use(methodOverride("_method"));

const subEndpoint = "/api/v1";

app.use(`${subEndpoint}/user`,userRouter);
app.use(`${subEndpoint}/bill`,billRouter);

mongoConnect(app, PORT);




