import Address from "@domain/address/entity/Address";
import CustomerFactory from "@domain/customer/factory/CustomerFactory";
import ICustomerRepository from "@domain/customer/repository/ICustomerRepository";

import {
  IInputCreateCustomerDto,
  IOutputCreateCustomerDto,
} from "./create.customer.dto";

export default class CreateCustomerUseCases {
  private customerRepository: ICustomerRepository;

  constructor(customerRepository: ICustomerRepository) {
    this.customerRepository = customerRepository;
  }

  async execute(
    input: IInputCreateCustomerDto
  ): Promise<IOutputCreateCustomerDto> {
    const customer = CustomerFactory.createWithAddress(
      input.name,
      input.doc,
      new Address(
        input.address.street,
        input.address.number,
        input.address.complement,
        input.address.district,
        input.address.city,
        input.address.state,
        input.address.zip
      )
    );

    await this.customerRepository.createCustomer(customer);

    return {
      id: customer.id,
      name: customer.name,
      doc: customer.doc,
      address: {
        street: customer.address?.street,
        number: customer.address?.number,
        complement: customer.address?.complement,
        district: customer.address?.district,
        city: customer.address?.city,
        state: customer.address?.state,
        zip: customer.address?.zip,
      },
    };
  }
}
