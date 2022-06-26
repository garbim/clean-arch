export interface IInputCreatePomodoroDto {
  startAt: number;
  duration: number;
  status: string;
}

export interface IOutputCreatePomodoroDto {
  code: string;
  startAt: number;
  duration: number;
  status: string;
}
