import { DataTypes, Model } from "sequelize";

import { database } from "../database";

interface IPomodoroModel {
  code: string;
  startAt: number;
  duration: number;
  status: string;
}

export class PomodoroModel extends Model<IPomodoroModel> { }

PomodoroModel.init(
  {
    code: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    startAt: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    duration: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "run",
    },
  },
  {
    sequelize: database,
    tableName: "pomodoros",
  }
);
