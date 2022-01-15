export class User {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  firstName: any;
  lastName: any;
  birthday: any;
  isAdmin: any;

  constructor(
    userName: string,
    email: string,
    password: string,
    confirmPassword: string,
    firstName?: string,
    lastName?: string,
    birthday?: any,
    isAdmin?: boolean
  ) {
    this.userName = userName;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
    this.isAdmin = isAdmin;
  }
}
