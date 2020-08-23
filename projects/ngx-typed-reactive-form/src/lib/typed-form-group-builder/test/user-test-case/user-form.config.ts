import {TypedFormBuilderConfig} from '../../../models/typed-form-builder-config.type';
import {FriendDto, UserDto} from './user.dto';

export const USER_FORM_CONFIG: TypedFormBuilderConfig<UserDto> = {
  id: ['null'],
  registered: ['null'],
  name: ['null'],
  isActive: [false],
  age: [1],
  about: ['null'],
  balance: ['null'],
  contacts: {
    address: {
      apartment: ['null'],
      building: ['null'],
      city: ['null'],
      street: ['null']
    },
    email: ['null'],
    phone: ['null']
  },
  friends: [
    [{} as FriendDto]
  ],
  tags: [[]],
};
