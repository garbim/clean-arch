export default class Vehicle {
  code: string;
  plate: string;
  chassis: string;
  model: string;
  ageModel: number;
  manufactory: string;
  ageManufactory: number;
  color: string;
  status: string;
  constructor(
    code: string,
    plate: string,
    chassis: string,
    model: string,
    ageModel: number,
    manufactory: string,
    ageManufactory: number,
    color: string,
    status: string
  ) {
    this.code = code;
    this.plate = plate;
    this.chassis = chassis;
    this.model = model;
    this.ageModel = ageModel;
    this.manufactory = manufactory;
    this.ageManufactory = ageManufactory;
    this.color = color;
    this.status = status;
  }
}
