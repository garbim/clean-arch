export default class Contract {
  code: string;
  customer_code: string;
  vehicle_code: string;
  insurance_code: string;
  address_code: string;
  status: string;
  constructor(
    code: string,
    customer_code: string,
    vehicle_code: string,
    insurance_code: string,
    address_code: string,
    status: string
  ) {
    this.code = code;
    this.customer_code = customer_code;
    this.vehicle_code = vehicle_code;
    this.insurance_code = insurance_code;
    this.address_code = address_code;
    this.status = status;
  }
}
