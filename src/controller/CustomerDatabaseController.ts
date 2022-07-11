import CustomerRepositoryDatabase from "@infra/storage/sequelize/customer/CustomerRepositoryDatabase";
import { IInputCreateCustomerDto } from "@usecases/customer/create/create.customer.dto";
import CreateCustomerUseCases from "@usecases/customer/create/create.customer.usescase";

export default class CustomerDatabaseController {
  static async createCustomer(body: IInputCreateCustomerDto) {
    const customerRepositoryDatabase = new CustomerRepositoryDatabase();
    const createCustomerUseCases = new CreateCustomerUseCases(
      customerRepositoryDatabase
    );
    const customer = await createCustomerUseCases.execute(body);
    return customer;
  }
}
