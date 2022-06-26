import { v4 as uuid } from "uuid";

import Pomodoro from "../../../domain/pomodoro/entity/Pomodoro";
import IPomodoroRepository from "../../../domain/pomodoro/repository/IPomodoroRepository";
import {
  IInputCreatePomodoroDto,
  IOutputCreatePomodoroDto,
} from "./create.pomodoro.dto";

export default class CreatePomodoroUseCase {
  private pomodoroRepository: IPomodoroRepository;

  constructor(pomodoroRepository: IPomodoroRepository) {
    this.pomodoroRepository = pomodoroRepository;
  }

  async execute(
    input: IInputCreatePomodoroDto
  ): Promise<IOutputCreatePomodoroDto> {
    const pomodoroCode = uuid();
    const pomodoro = new Pomodoro(
      pomodoroCode,
      input.startAt,
      input.duration,
      input.status
    );
    await this.pomodoroRepository.createPomodoro(pomodoro);
    return {
      code: pomodoro.code,
      startAt: pomodoro.startAt,
      duration: pomodoro.duration,
      status: pomodoro.status,
    };
  }
}
