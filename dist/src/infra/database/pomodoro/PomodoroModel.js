"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PomodoroModel = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
class PomodoroModel extends sequelize_1.Model {
}
exports.PomodoroModel = PomodoroModel;
PomodoroModel.init({
    code: {
        type: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    startAt: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
    },
    duration: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: "run",
    },
}, {
    sequelize: database_1.database,
    tableName: "pomodoros",
});
//# sourceMappingURL=PomodoroModel.js.map