import express from "express";
import "module-alias/register";
import "../../../util/module-alias";

import { customersRoutes } from "./routes/customers.routes";
import { pomodorosRoutes } from "./routes/pomodoros.routes";

const app = express();

app.use(express.json());
app.use(pomodorosRoutes);
app.use(customersRoutes);

app.listen(3000, () => {
  console.log("rodando");
});
