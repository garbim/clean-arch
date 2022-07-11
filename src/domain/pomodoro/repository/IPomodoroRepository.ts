import Pomodoro from "../entity/Pomodoro";

export default interface IPomodoroRepository {
  pausePomodoro(code: string): Promise<Pomodoro>;
  returnPomodoro(code: string): Promise<Pomodoro>;
  createPomodoro({ code, startAt, duration, status }: Pomodoro): void;
}
