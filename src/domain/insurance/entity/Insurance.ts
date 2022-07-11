export default class Insurance {
  code: string;
  name: string;
  status: string;
  constructor(code: string, name: string, status: string) {
    this.code = code;
    this.name = name;
    this.status = status;
  }
}
