import PomodoroRepositoryDatabase from "@infra/database/pomodoro/PomodoroRepositoryDatabase";
import { IInputCreatePomodoroDto } from "@usecases/pomodoro/create/create.pomodoro.dto";
import CreatePomodoroUseCase from "@usecases/pomodoro/create/create.pomodoro.usecase";

export default class PomodoroController {
  static async createPomodoro(body: IInputCreatePomodoroDto) {
    const pomodoroRepositoryDatabase = new PomodoroRepositoryDatabase();
    const createPomodoroUseCase = new CreatePomodoroUseCase(
      pomodoroRepositoryDatabase
    );
    const pomodoro = await createPomodoroUseCase.execute(body);
    return pomodoro;
  }
}
