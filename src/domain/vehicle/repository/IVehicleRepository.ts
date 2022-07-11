import Vehicle from "../entity/Vehicle";

export default interface IVehicleRepository {
  editVehicle(code: string): Promise<Vehicle>;
  getVehicle(code: string): Promise<Vehicle>;
  createVehicle({
    code,
    plate,
    chassis,
    model,
    ageModel,
    manufactory,
    ageManufactory,
    color,
    status,
  }: Vehicle): void;
}
