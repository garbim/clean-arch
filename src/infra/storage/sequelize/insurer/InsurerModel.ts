import { DataTypes, Model } from "sequelize";

import { database } from "../database";

interface IInsurerModel {
  code: string;
  name: string;
  status: string;
}

export class InsurerModel extends Model<IInsurerModel> { }

InsurerModel.init(
  {
    code: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
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
    tableName: "insurers",
  }
);
