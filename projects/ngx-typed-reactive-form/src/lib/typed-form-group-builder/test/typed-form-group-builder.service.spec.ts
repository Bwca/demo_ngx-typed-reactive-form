import { FormBuilder } from '@angular/forms';

import { TypedFormGroup } from '../../models/typed-form-group.model';
import { TypedFormGroupBuilderService } from '../typed-form-group-builder.service';
import { EmployeeDto } from './employee.dto';
import { FORM_CONFIG } from './form-config.const';

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
