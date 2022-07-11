import Address from "@domain/address/entity/Address";
import Entity from "@domain/shared/entity/entity.abstract";
import NotificationError from "@domain/shared/notification/notification.error";

import CustomerValidatorFactory from "../factory/customer.validator.factory";

export default class Customer extends Entity {
  private _name = "";
  public doc: string;
  public address!: Address;
  constructor(id: string, name: string, doc: string) {
    super();
    this._id = id;
    this._name = name;
    this.doc = doc;
    this.validate();
    if (this.notification.hasErrors()) {
      throw new NotificationError(this.notification.getErrors());
    }
  }

  get name(): string {
    return this._name;
  }

  validate() {
    CustomerValidatorFactory.create().validate(this);
  }

  changeAddress(address: Address): void {
    this.address = address;
  }
}
