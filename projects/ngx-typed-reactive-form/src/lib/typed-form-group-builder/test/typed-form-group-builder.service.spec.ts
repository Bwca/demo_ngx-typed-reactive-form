import {TestBed} from '@angular/core/testing';

import {TypedFormGroupBuilderService} from '../typed-form-group-builder.service';
import {EmployeeDto} from './employee.dto';
import {FORM_CONFIG} from './form-config.const';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';

describe('DemoTypedFormBuilderService', () => {
  let service: TypedFormGroupBuilderService;

  beforeEach(() => {
    service = new TypedFormGroupBuilderService(new FormBuilder());
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should produce a form', () => {
    const form = service.buildFormGroupFromConfig<EmployeeDto>(FORM_CONFIG);
    expect(form).toBeTruthy();
  });

  it('should fetch each control corresponding to dto keys', () => {
    // Arrange
    const form = service.buildFormGroupFromConfig<EmployeeDto>(FORM_CONFIG);

    // Act
    const controls = Object.keys(FORM_CONFIG).map(i => form.get(i as keyof EmployeeDto));

    // Assert
    expect(controls.every(c => Boolean(c))).toBeTruthy();
  });

  it('should preserve values in form', () => {
    // Arrange
    const form = service.buildFormGroupFromConfig<EmployeeDto>(FORM_CONFIG);

    // Act
    const sameValues = Object.entries(FORM_CONFIG).every(([key, value]) => {
      const control = form.get(key as keyof EmployeeDto);

      /** Exclude non-arrays */
      if (!Array.isArray(value)) {
        return true;
      }

      return control.value === value[0];
    });

    // Assert
    expect(sameValues).toBeTruthy();
  });
});

