import { DataTypes, Model } from "sequelize";

import { CustomerModel } from "../customer/CustomerModel";
import { database } from "../database";
import { InsurerModel } from "../insurer/InsurerModel";
import { VehicleModel } from "../vehicle/VehicleModel";

interface IContractModel {
  code: string;
  status: string;
  customer_code: string;
  vehicle_code: string;
  insurer_code: string;
}

export class ContractModel extends Model<IContractModel> { }

ContractModel.init(
  {
    code: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    customer_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vehicle_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    insurer_code: {
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
    tableName: "contracts",
  }
);

ContractModel.belongsTo(CustomerModel, { foreignKey: "customer_code" });
ContractModel.belongsTo(VehicleModel, { foreignKey: "vehicle_code" });
ContractModel.belongsTo(InsurerModel, { foreignKey: "insurer_code" });
