import {FormArray} from '@angular/forms';

import {OverrideProperties} from '../utility-types/override-properties.type';
import {TypedAbstractControl} from './typed-abstract-control.model';

interface FormArrayOverride<T> {
  controls: TypedAbstractControl<T>[];

  at(index: number): TypedAbstractControl<T>;

  push(control: TypedAbstractControl<T>): void;

  insert(index: number, control: TypedAbstractControl<T>): void;
}

export type TypedFormArray<T> = OverrideProperties<FormArray,
  FormArrayOverride<T>> &
  TypedAbstractControl<T>;
