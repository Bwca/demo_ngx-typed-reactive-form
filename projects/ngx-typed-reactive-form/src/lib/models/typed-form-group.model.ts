import { FormGroup} from '@angular/forms';

import {NestedControl} from './nested-control.type';
import {OverrideProperties} from './override-properties.type';
import {TypedAbstractControl} from './typed-abstract-control.model';


export interface FormGroupOverride<T> {
  controls: NestedControl<T>;
  getRawValue(): T;
}

export type TypedFormGroup<T> =
  OverrideProperties<FormGroup, FormGroupOverride<T>>
  & TypedAbstractControl<T>;
