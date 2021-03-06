import PomodoroRepositoryTypeOrm from "@infra/storage/typeOrm/pomodoro/PomodoroRepositoryTypeOrm";
import { IInputCreatePomodoroDto } from "@usecases/pomodoro/create/create.pomodoro.dto";
import CreatePomodoroUseCase from "@usecases/pomodoro/create/create.pomodoro.usecase";

export default class PomodoroController {
  static async createPomodoro(body: IInputCreatePomodoroDto) {
    const PomodoroRepositoryTypeOrm = new PomodoroRepositoryTypeOrm();
    const createPomodoroUseCase = new CreatePomodoroUseCase(
      PomodoroRepositoryTypeOrm
    );
    const pomodoro = await createPomodoroUseCase.execute(body);
    return pomodoro;
  }
}
