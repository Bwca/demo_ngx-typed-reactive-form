import {TypedAbstractControl} from '../typed-reactive-controls/typed-abstract-control.model';
import {TypedFormArray} from '../typed-reactive-controls/typed-form-array.type';
import {TypedControl} from '../typed-reactive-controls/typed-form-control.type';
import {TypedFormGroup} from '../typed-reactive-controls/typed-form-group.model';
import {Primitive} from './primitive.type';

export type NestedControl<T> = {
  [P in keyof T]: T[P] extends Primitive | Array<Primitive>
    ? TypedControl<T[P]>
    : T[P] extends Array<unknown>
      ? TypedFormArray<T[P]>
      : TypedFormGroup<T[P]>;
} &
  TypedAbstractControl<T>;
