import {FormArray} from '@angular/forms';

import {TypedControl} from './typed-form-control.type';
import {TypedFormGroup} from './typed-form-group.model';

type Primitive = string | number | bigint | boolean | undefined | symbol;

export type TypedFormBuilderConfig<T> = {
  [P in keyof T]: T[P] extends Primitive
    ? T[P] | [T[P], ...unknown[]] | TypedFormGroup<T[P]>
    : T[P] extends Array<unknown>
      ? T[P] | FormArray
      : TypedFormBuilderConfig<T[P]> | TypedFormGroup<T[P]> | TypedControl<T[P]>;
};
