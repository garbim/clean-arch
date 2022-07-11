import IValidator from "@domain/shared/validator/validator.interface";

import Customer from "../entity/Customer";
import CustomerYupValidator from "../validator/customer.yup.validator";

export default class CustomerValidatorFactory {
  static create(): IValidator<Customer> {
    return new CustomerYupValidator();
  }
}
