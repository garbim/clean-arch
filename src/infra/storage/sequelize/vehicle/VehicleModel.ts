import { DataTypes, Model } from "sequelize";

import { database } from "../database";

interface IVehicleModel {
  code: string;
  plate: string;
  chassis: string;
  model: string;
  ageModel: number;
  manufactory: string;
  ageManufactory: number;
  color: string;
  status: string;
}

export class VehicleModel extends Model<IVehicleModel> { }

VehicleModel.init(
  {
    code: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    plate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    chassis: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ageModel: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    manufactory: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ageManufactory: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: database,
    tableName: "vehicles",
  }
);
