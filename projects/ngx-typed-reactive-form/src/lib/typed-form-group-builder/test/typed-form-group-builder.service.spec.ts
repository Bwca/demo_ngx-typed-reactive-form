import { TestBed } from '@angular/core/testing';

import { TypedFormGroupBuilderService } from '../typed-form-group-builder.service';
import {EmployeeDto} from './employee.dto';
import {FORM_CONFIG} from './form-config.const';

describe('DemoTypedFormBuilderService', () => {
  let service: TypedFormGroupBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypedFormGroupBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should produce a form', () => {
    const form = service.buildFormGroupFromConfig<EmployeeDto>(FORM_CONFIG);
    expect(form).toBeTruthy();
  });
});

