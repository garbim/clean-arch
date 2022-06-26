export default class Pomodoro {
  code: string;
  startAt: number;
  duration: number;
  status: string;
  constructor(code: string, startAt: number, duration: number, status: string) {
    this.code = code;
    this.startAt = startAt;
    this.duration = duration;
    this.status = status;
  }
}
