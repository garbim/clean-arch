import Customer from "../entity/Customer";

export default interface ICustomerRepository {
  editCustomer(id: string): Promise<Customer>;
  getCustomer(id: string): Promise<Customer>;
  createCustomer(entity: Customer): Promise<void>;
}
