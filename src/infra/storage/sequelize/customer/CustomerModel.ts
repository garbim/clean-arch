import { DataTypes, Model } from "sequelize";

import { AddressModel } from "../address/AddressModel";
import { database } from "../database";

interface ICustomerModel {
  id: string;
  name: string;
  doc: string;
  address: any;
}

export class CustomerModel extends Model<ICustomerModel> { }

CustomerModel.init(
  {
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    doc: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    address: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
  },
  {
    sequelize: database,
    tableName: "customers",
  }
);

// CustomerModel.belongsTo(AddressModel, { foreignKey: "address_code" });
