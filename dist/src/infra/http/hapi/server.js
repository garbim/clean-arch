"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
require("../../../util/module-alias");
const HapiAdapter_1 = __importDefault(require("@adapter/HapiAdapter"));
const PomodoroController_1 = __importDefault(require("@controller/PomodoroController"));
const hapi_1 = __importDefault(require("@hapi/hapi"));
const server = hapi_1.default.server({
    port: 3001,
    host: "localhost",
});
server.route({
    method: "POST",
    path: "/pomodoros",
    handler: HapiAdapter_1.default.createPomodoro(PomodoroController_1.default.createPomodoro),
});
server.start();
//# sourceMappingURL=server.js.map