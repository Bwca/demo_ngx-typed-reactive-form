import {Validators} from '@angular/forms';

import {TypedFormBuilderConfig} from '../../../models/typed-form-builder-config.type';
import { UserDto} from './user.dto';

export const USER_FORM_CONFIG: TypedFormBuilderConfig<UserDto> = {
  id: ['1312332'],
  registered: ['1992-12-12', Validators.required],
  name: ['John Doe'],
  isActive: [false],
  age: [99],
  about: ['This is a generic description'],
  balance: ['12412412'],
  contacts: {
    address: {
      apartment: ['App. 99'],
      building: ['92/B'],
      city: ['City'],
      street: ['Street'],
    },
    email: ['some-email@email.com'],
    phone: ['1-458-485-45-54'],
  },
  friends: [{
    name: 'Jane Doe'
  }],
  tags: [['tag one', 'tag two']],
};
