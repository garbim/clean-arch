import CreatePomodoroUseCase from "../../../usecases/pomodoro/create/create.pomodoro.usecase";
import PomodoroRepositoryDatabase from "./PomodoroRepositoryDatabase";

const input = {
  startAt: new Date().getTime(),
  duration: 15,
  status: "run",
};

describe("Create pomodoro and create in database", () => {
  it("should create pomodoro in database", async () => {
    const pomodoroRepository = new PomodoroRepositoryDatabase();
    const createPomodoroUseCase = new CreatePomodoroUseCase(pomodoroRepository);

    const output = await createPomodoroUseCase.execute(input);

    expect(output).toEqual({
      code: expect.any(String),
      startAt: input.startAt,
      duration: input.duration,
      status: input.status,
    });
  });
});
