export interface EmployeeDto {
  creationDate: string;
  department: Department;
  email: string;
  firstName: string;
  lastName: string;
  middleName: string;
  parentEmployee: Employee;
  permissions: string[];
  phone: string;
  position: Position;
}

export interface Department {
  address: Address;
  name: string;
  phone: string;
}

export interface Address {
  building: string;
  city: string;
  code: string;
  country: string;
  street: string;
}

export interface Employee {
  email: string;
  firstName: string;
  lastName: string;
  middleName: string;
  phone: string;
  position: Position;
}

export interface Position {
  actualFrom: string;
  actualTo: string;
  name: string;
}
