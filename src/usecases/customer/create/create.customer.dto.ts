export interface IInputCreateCustomerDto {
  name: string;
  doc: string;
  address: {
    street: string;
    number: string;
    complement: string;
    district: string;
    city: string;
    state: string;
    zip: string;
  };
}

export interface IOutputCreateCustomerDto {
  id: string;
  name: string;
  doc: string;
  address: {
    street: string | undefined;
    number: string | undefined;
    complement: string | undefined;
    district: string | undefined;
    city: string | undefined;
    state: string | undefined;
    zip: string | undefined;
  };
}
