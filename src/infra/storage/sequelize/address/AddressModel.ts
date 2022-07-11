import { DataTypes, Model } from "sequelize";

import { database } from "../database";

interface IAddressModel {
  code: string;
  street: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  state: string;
  zip: string;
}

export class AddressModel extends Model<IAddressModel> { }

AddressModel.init(
  {
    code: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    complement: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    district: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zip: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: database,
    tableName: "addresses",
  }
);
