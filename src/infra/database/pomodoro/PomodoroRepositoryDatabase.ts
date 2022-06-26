import Pomodoro from "@domain/pomodoro/entity/Pomodoro";
import IPomodoroRepository from "@domain/pomodoro/repository/IPomodoroRepository";

import { database } from "../database";
import { PomodoroModel } from "./PomodoroModel";

export default class PomodoroRepositoryDatabase implements IPomodoroRepository {
  pausePomodoro(code: string): Promise<Pomodoro> {
    throw new Error("Method not implemented.");
  }
  returnPomodoro(code: string): Promise<Pomodoro> {
    throw new Error("Method not implemented.");
  }
  async createPomodoro({
    code,
    startAt,
    duration,
    status,
  }: Pomodoro): Promise<Pomodoro> {
    const pomodoro = new Pomodoro(code, startAt, duration, status);
    await database.sync();
    console.log(pomodoro);
    await PomodoroModel.create(pomodoro);
    return pomodoro;
  }
}
