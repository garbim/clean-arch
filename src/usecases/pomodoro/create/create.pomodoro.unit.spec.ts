import CreatePomodoroUseCase from "./create.pomodoro.usecase";

const input = {
  startAt: new Date().getTime(),
  duration: 15,
  status: "run",
};

const MockRepository = () => {
  return {
    createPomodoro: jest.fn(),
    returnPomodoro: jest.fn(),
    pausePomodoro: jest.fn(),
  };
};

describe("Unit Test create pomodoro use case", () => {
  it("should create a pomodoro", async () => {
    const pomodoroRepository = MockRepository();
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
