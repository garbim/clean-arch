"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_pomodoro_usecase_1 = __importDefault(require("../../../usecases/pomodoro/create/create.pomodoro.usecase"));
const PomodoroRepositoryDatabase_1 = __importDefault(require("./PomodoroRepositoryDatabase"));
const input = {
    startAt: new Date().getTime(),
    duration: 15,
    status: "run",
};
describe("Create pomodoro and create in database", () => {
    it("should create pomodoro in database", () => __awaiter(void 0, void 0, void 0, function* () {
        const pomodoroRepository = new PomodoroRepositoryDatabase_1.default();
        const createPomodoroUseCase = new create_pomodoro_usecase_1.default(pomodoroRepository);
        const output = yield createPomodoroUseCase.execute(input);
        expect(output).toEqual({
            code: expect.any(String),
            startAt: input.startAt,
            duration: input.duration,
            status: input.status,
        });
    }));
});
//# sourceMappingURL=create.pomodoro.database.spec.js.map