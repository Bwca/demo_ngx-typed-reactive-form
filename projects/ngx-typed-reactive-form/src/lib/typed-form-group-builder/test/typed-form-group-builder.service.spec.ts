import { FormBuilder } from '@angular/forms';

import { TypedFormGroup } from '../../models/typed-reactive-controls/typed-form-group.model';
import { TypedFormGroupBuilderService } from '../typed-form-group-builder.service';
import { EmployeeDto } from './employee-test-case/employee.dto';
import { FORM_CONFIG } from './employee-test-case/form-config.const';
import { USER_FORM_CONFIG } from './user-test-case/user-form.config';
import { UserDto } from './user-test-case/user.dto';

describe('DemoTypedFormBuilderService', () => {
  let service: TypedFormGroupBuilderService;
  let form: TypedFormGroup<EmployeeDto>;

  beforeEach(() => {
    service = new TypedFormGroupBuilderService(new FormBuilder());
    form = service.buildFormGroupFromConfig<EmployeeDto>(FORM_CONFIG);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should produce a form', () => {
    expect(form).toBeTruthy();
  });

  it('form should match snapshot', () => {
    expect(form).toMatchSnapshot();
  });

  it('should fetch each control corresponding to dto keys', () => {
    // Act
    const controls = Object.keys(FORM_CONFIG).map((i) =>
      form.get(i as keyof EmployeeDto)
    );

    // Assert
    expect(controls.every((c) => Boolean(c))).toBeTruthy();
  });

  it('should preserve values in form', () => {
    // Act
    const sameValues = Object.entries(FORM_CONFIG).every(([key, value]) => {
      const control = form.get(key as keyof EmployeeDto);

      /** Exclude non-arrays */
      if (
        !Array.isArray(value) ||
        key === 'permissions' ||
        key === 'nicknames'
      ) {
        return true;
      }

      return control.value === value[0];
    });

    // Assert
    expect(sameValues).toBeTruthy();
  });

  it('should get the position name of parent employee', () => {
    const expectedValue = 'Joker';

    const parentPositionControl =
      form.controls.parentEmployee.controls.position.controls.name;

    expect(parentPositionControl.value).toEqual(expectedValue);
  });

  it('permissions should be an array of objects', () => {
    // Arrange
    const expectedValue = FORM_CONFIG.permissions[0][0];

    // Act
    const permissionControl = form.controls.permissions;

    // Assert
    expect(permissionControl.at(0).value[0].id).toEqual(expectedValue.id);
  });
});

describe('DemoTypedFormBuilderService', () => {
  let service: TypedFormGroupBuilderService;
  let form: TypedFormGroup<UserDto>;

  beforeEach(() => {
    service = new TypedFormGroupBuilderService(new FormBuilder());
    form = service.buildFormGroupFromConfig<UserDto>(USER_FORM_CONFIG);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should produce a form', () => {
    expect(form).toBeTruthy();
  });

  it('form should match snapshot', () => {
    expect(form).toMatchSnapshot();
  });
});

describe('DemoTypedFormBuilderService', () => {
  const fb = new FormBuilder();
  let form: TypedFormGroup<UserDto>;

  it('form should match snapshot', () => {
    const address = fb.group(USER_FORM_CONFIG.contacts.address);
    const contacts = fb.group({ ...USER_FORM_CONFIG.contacts, address });

    form = fb.group({
      ...USER_FORM_CONFIG,
      contacts,
      friends: fb.array([]),
    }) as TypedFormGroup<UserDto>;

    USER_FORM_CONFIG.friends.forEach((i) =>
      form.controls.friends.push(fb.group(i))
    );

    expect(form).toMatchSnapshot();
  });
});
