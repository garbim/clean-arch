import express from "express";
import "module-alias/register";
import "../../../util/module-alias";

import { pomodorosRoutes } from "./routes/pomodoros.routes";

const app = express();

app.use(express.json());
app.use(pomodorosRoutes);

app.listen(3000, () => {
  console.log("rodando");
});
