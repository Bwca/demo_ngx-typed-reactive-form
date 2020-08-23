import { FormArray } from '@angular/forms';

import { TypedFormGroup } from './typed-form-group.model';

type Primitive = string | number | bigint | boolean | undefined | symbol;

export type TypedControlConfig<T> = {
  [P in keyof T]: T[P] extends Primitive
    ? T[P] | [T[P], ...unknown[]] | TypedFormGroup<T[P]>
    : T[P] extends Array<unknown>
    ? T[P] | FormArray
    : TypedControlConfig<T[P]> | TypedFormGroup<T[P]>;
};
