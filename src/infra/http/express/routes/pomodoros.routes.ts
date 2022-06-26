import ExpressAdapter from "@adapter/ExpressAdapter";
import PomodoroController from "@controller/PomodoroController";
import { Router } from "express";

const pomodorosRoutes = Router();

pomodorosRoutes.post(
  "/pomodoros",
  ExpressAdapter.createPomodoro(PomodoroController.createPomodoro)
);

export { pomodorosRoutes };
