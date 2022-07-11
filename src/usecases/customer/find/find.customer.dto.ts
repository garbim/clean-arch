export interface IInputFindCustomerDto {
  id: string;
}

export interface IOutputFindCustomerDto {
  id: string;
  name: string;
  doc: string;
  address: {
    street: string;
    city: string;
    state: string;
    number: number;
    complement: string;
    zip: string;
  };
}
