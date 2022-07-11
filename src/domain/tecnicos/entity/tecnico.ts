import Address from "@domain/address/entity/Address";

export default class Tecnico {
  code: string;
  name: string;
  status: string;
  faixa: string;
  atendimento: Atendimento[];
  address: Address[];
  constructor(code: string, name: string) {
    this.code = code;
    this.name = name;
    this.address = {
      street: "",
      number: "",
      complement: "",
      district: "",
      city: "",
      state: "",
      zip: "",
    };
  }

  public changeAddress(address: Address): void {
    this.address = address;
  }
}
