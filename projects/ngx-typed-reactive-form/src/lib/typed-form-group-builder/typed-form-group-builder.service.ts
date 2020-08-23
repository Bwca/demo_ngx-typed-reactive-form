import {Injectable} from '@angular/core';
import {FormBuilder} from '@angular/forms';

import {TypedFormBuilderConfig} from '../models/typed-form-builder-config.type';
import {TypedFormGroup} from '../models/typed-form-group.model';

@Injectable({
  providedIn: 'root',
})
export class TypedFormGroupBuilderService {
  constructor(private fb: FormBuilder) {
  }

  public buildFormGroupFromConfig<T>(
    formConfig: TypedFormBuilderConfig<T>
  ): TypedFormGroup<T> {
    const config: TypedFormBuilderConfig<T> = {} as TypedFormBuilderConfig<T>;

    for (const [key, value] of Object.entries(formConfig)) {
      const valueIsArrayOrPrimitive = Array.isArray(value) || typeof value !== 'object';
      if (valueIsArrayOrPrimitive) {
        config[key] = value;
        continue;
      }
      config[key] = this.buildFormGroupFromConfig<typeof value>(value);
    }
    return this.fb.group(config) as TypedFormGroup<T>;
  }
}
