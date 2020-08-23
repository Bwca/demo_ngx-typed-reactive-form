import { Validators } from '@angular/forms';

import { TypedControlConfig } from 'ngx-typed-reactive-form';

import { EmployeeDto } from './employee.dto';

export const FORM_CONFIG: TypedControlConfig<EmployeeDto> = {
  creationDate: ['1991-12-12'],
  department: {
    address: {
      building: ['2670'],
      city: ['Northwards'],
      code: ['03261'],
      country: ['Norwood'],
      street: ['Peck Street'],
    },
    name: ['Adjuster'],
    phone: ['832-313-8717'],
  },
  email: ['DebbiJChaires@dayrep.com '],
  firstName: ['Debbi'],
  lastName: ['Chairs'],
  middleName: ['J.'],
  parentEmployee: {
    email: ['DebbiJChaires@dayrep.com '],
    firstName: ['Cody'],
    lastName: ['Hyatt'],
    middleName: ['M.'],
    phone: ['832-313-8717'],
    position: {
      actualFrom: ['1991-12-12', Validators.required],
      actualTo: ['1991-12-12'],
      name: ['Joker', Validators.required],
    },
  },
  permissions: ['permissions'],
  phone: ['832-313-8717'],
  position: {
    actualFrom: ['1991-12-12', Validators.required],
    actualTo: ['1991-12-12'],
    name: ['Adjuster', Validators.required],
  },
};
