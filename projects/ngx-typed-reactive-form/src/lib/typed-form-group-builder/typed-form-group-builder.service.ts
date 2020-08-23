import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { TypedFormBuilderConfig } from '../models/typed-form-builder-config.type';
import { TypedFormGroup } from '../models/typed-form-group.model';

@Injectable({
  providedIn: 'root',
})
export class TypedFormGroupBuilderService {
  constructor(private fb: FormBuilder) {}

  private static isPrimitiveValue(value: any): boolean {
    return typeof value !== 'object';
  }

  public buildFormGroupFromConfig<T>(
    formConfig: TypedFormBuilderConfig<T>
  ): TypedFormGroup<T> {
    const config: TypedFormBuilderConfig<T> = {} as TypedFormBuilderConfig<T>;

    for (const [key, value] of Object.entries(formConfig)) {
      if (TypedFormGroupBuilderService.isPrimitiveValue(value)) {
        config[key] = value;
        continue;
      }
      if (Array.isArray(value)) {
        if (
          value.length &&
          !TypedFormGroupBuilderService.isPrimitiveValue(value[0])
        ) {
          config[key] = this.fb.array([]);
          value.forEach((i) =>
            config[key].push(this.buildFormGroupFromConfig<typeof i>(i))
          );
        } else {
          config[key] = value;
        }
        continue;
      }
      config[key] = this.buildFormGroupFromConfig<typeof value>(value);
    }
    return this.fb.group(config) as TypedFormGroup<T>;
  }
}
