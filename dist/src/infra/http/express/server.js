"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("module-alias/register");
require("../../../util/module-alias");
const pomodoros_routes_1 = require("./routes/pomodoros.routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(pomodoros_routes_1.pomodorosRoutes);
app.listen(3000, () => {
    console.log("rodando");
});
//# sourceMappingURL=server.js.map