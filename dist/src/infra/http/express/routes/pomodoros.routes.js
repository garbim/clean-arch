"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pomodorosRoutes = void 0;
const ExpressAdapter_1 = __importDefault(require("@adapter/ExpressAdapter"));
const PomodoroController_1 = __importDefault(require("@controller/PomodoroController"));
const express_1 = require("express");
const pomodorosRoutes = (0, express_1.Router)();
exports.pomodorosRoutes = pomodorosRoutes;
pomodorosRoutes.post("/pomodoros", ExpressAdapter_1.default.createPomodoro(PomodoroController_1.default.createPomodoro));
//# sourceMappingURL=pomodoros.routes.js.map