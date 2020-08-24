export interface UserDto {
  id: string;
  isActive: boolean;
  balance: string;
  age: number;
  name: string;
  contacts: ContactDto;
  about: string;
  registered: string;
  tags: string[];
  friends: FriendDto[];
}

export interface ContactDto {
  email: string;
  phone: string;
  address: AddressDto;
}

export interface AddressDto {
  city: string;
  street: string;
  building: string;
  apartment: string;
}

export interface FriendDto {
  id?: number;
  name: string;
}
