export interface IInputFindCustomerDto {
  id: string;
}

export interface IOutputFindCustomerDto {
  id: string;
  name: string;
  address: {
    street: string;
    city: string;
    state: string;
    number: number;
    complement: string;
    zip: string;
  };
}
