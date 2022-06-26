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
const PomodoroRepositoryDatabase_1 = __importDefault(require("@infra/database/pomodoro/PomodoroRepositoryDatabase"));
const create_pomodoro_usecase_1 = __importDefault(require("@usecases/pomodoro/create/create.pomodoro.usecase"));
class PomodoroController {
    static createPomodoro(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const pomodoroRepositoryDatabase = new PomodoroRepositoryDatabase_1.default();
            const createPomodoroUseCase = new create_pomodoro_usecase_1.default(pomodoroRepositoryDatabase);
            const pomodoro = yield createPomodoroUseCase.execute(body);
            return pomodoro;
        });
    }
}
exports.default = PomodoroController;
//# sourceMappingURL=PomodoroController.js.map