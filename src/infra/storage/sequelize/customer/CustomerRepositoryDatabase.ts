import Customer from "@domain/customer/entity/Customer";
import ICustomerRepository from "@domain/customer/repository/ICustomerRepository";

import { database } from "../database";
import { CustomerModel } from "./CustomerModel";

export default class CustomerRepositoryDatabase implements ICustomerRepository {
  editCustomer(id: string): Promise<Customer> {
    throw new Error("Method not implemented.");
  }
  getCustomer(id: string): Promise<Customer> {
    throw new Error("Method not implemented.");
  }

  async createCustomer(entity: Customer): Promise<void> {
    console.log("banco");
    await database.sync();
    await CustomerModel.create({
      id: entity.id,
      name: entity.name,
      doc: entity.doc,
    });
  }
}
