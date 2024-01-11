export class LoginPayload {
  email: string;
  password: string;
  constructor() {
    this.email = 'xyz@gmail.com';
    this.password = `${new Date().getTime()}`;
  }
}
