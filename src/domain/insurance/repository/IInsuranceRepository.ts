import Insurance from "../entity/Insurance";

export default interface IAddressRepository {
  editInsurance(code: string): Promise<Insurance>;
  getInsurance(code: string): Promise<Insurance>;
  createInsurance({ code, name, status }: Insurance): Promise<Insurance>;
}
