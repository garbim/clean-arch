import CreateCustomerUseCase from "./create.customer.usescase";

const input = {
  name: "Testildo",
  doc: "001.002.003-04",
  address: {
    street: "rua A",
    number: "11",
    complement: "casa b",
    district: "bairro c",
    city: "cidade",
    state: "estado tal",
    zip: "12345-678",
  },
};

const output = {
  id: expect.any(String),
  name: "Testildo",
  doc: "001.002.003-04",
  address: {
    street: "rua A",
    number: "11",
    complement: "casa b",
    district: "bairro c",
    city: "cidade",
    state: "estado tal",
    zip: "12345-678",
  },
};

const MockRepository = () => {
  return {
    createCustomer: jest.fn(),
    getCustomer: jest.fn(),
    editCustomer: jest.fn(),
  };
};

describe("Unit Test create customer use case", () => {
  it("should create a customer", async () => {
    const customerRepository = MockRepository();
    const createPomodoroUseCase = new CreateCustomerUseCase(customerRepository);

    const customerOutput = await createPomodoroUseCase.execute(input);

    expect(output).toEqual(customerOutput);
  });

  it("should thrown an error when name is missing", async () => {
    const customerRepository = MockRepository();
    const createCustomerUseCase = new CreateCustomerUseCase(customerRepository);

    input.name = "";

    const output = createCustomerUseCase.execute(input);

    await expect(output).rejects.toThrowError("Name is required");
  });
});
