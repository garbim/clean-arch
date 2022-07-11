export default class Address {
  street: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  state: string;
  zip: string;
  constructor(
    street: string,
    number: string,
    complement: string,
    district: string,
    city: string,
    state: string,
    zip: string
  ) {
    this.street = street;
    this.number = number;
    this.complement = complement;
    this.district = district;
    this.city = city;
    this.state = state;
    this.zip = zip;
  }
}
