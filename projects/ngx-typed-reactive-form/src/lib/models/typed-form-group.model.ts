import {FormGroup} from '@angular/forms';

import {OverriddenProperties} from './overridden-properties.type';
import {TypedAbstractControl} from './typed-abstract-control.model';
import {TypedControl} from './typed-form-control.type';


interface FormGroupOverride<T> extends FormGroup {
  controls: {
    [K in keyof T]: T[K] extends object ? FormGroupOverride<T[K]> : TypedControl<T[K]>;
  };

  getRawValue(): T;
}

export type TypedFormGroup<T> =
  OverriddenProperties<FormGroup, FormGroupOverride<T>>
  & TypedAbstractControl<T>;
