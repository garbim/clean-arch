import Address from "../entity/Address";

export default interface IAddressRepository {
  editAddress(code: string): Promise<Address>;
  getAddress(code: string): Promise<Address>;
  createAddress({
    street,
    number,
    complement,
    district,
    city,
    state,
    zip,
  }: Address): Promise<Address>;
}
