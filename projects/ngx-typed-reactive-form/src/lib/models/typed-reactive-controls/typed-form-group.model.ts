import {FormGroup} from '@angular/forms';

import {NestedControl} from '../utility-types/nested-control.type';
import {OverrideProperties} from '../utility-types/override-properties.type';
import {TypedAbstractControl} from './typed-abstract-control.model';

export interface FormGroupOverride<T> {
  controls: NestedControl<T>;

  getRawValue(): T;
}

export type TypedFormGroup<T> = OverrideProperties<FormGroup,
  FormGroupOverride<T>> &
  TypedAbstractControl<T>;
