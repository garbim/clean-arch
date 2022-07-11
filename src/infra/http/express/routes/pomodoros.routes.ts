import ExpressAdapter from "@adapter/ExpressAdapter";
import PomodoroDatabaseController from "@controller/PomodoroDatabaseController";
import { Router } from "express";

const pomodorosRoutes = Router();

pomodorosRoutes.post(
  "/pomodoros",
  ExpressAdapter.createPomodoro(PomodoroDatabaseController.createPomodoro)
);

export { pomodorosRoutes };
