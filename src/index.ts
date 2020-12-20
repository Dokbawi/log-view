import express from "express";
import { Server } from "http";
import { rootRouter } from "./router";

const app = express();
const http = new Server(app);
const PORT = process.env.PORT || 3000;

app.use("/v1", rootRouter);

http.listen(PORT, function () {
  console.log("server on");
});
