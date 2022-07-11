import Address from "@domain/address/entity/Address";
import { v4 as uuid } from "uuid";

import Customer from "../entity/Customer";

export default class CustomerFactory {
  public static create(name: string, doc: string): Customer {
    return new Customer(uuid(), name, doc);
  }
  public static createWithAddress(
    name: string,
    doc: string,
    address: Address
  ): Customer {
    const customer = new Customer(uuid(), name, doc);
    customer.changeAddress(address);
    return customer;
  }
}
