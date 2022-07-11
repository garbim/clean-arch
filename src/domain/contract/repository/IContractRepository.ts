import Contract from "../entity/Contract";

export default interface IAddressRepository {
  editContract(code: string): Promise<Contract>;
  getContract(code: string): Promise<Contract>;
  createContract({
    code,
    address_code,
    customer_code,
    insurance_code,
    vehicle_code,
    status,
  }: Contract): Promise<Contract>;
}
