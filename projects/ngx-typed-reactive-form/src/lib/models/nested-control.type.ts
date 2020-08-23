import { Primitive } from './primitive.type';
import { TypedAbstractControl } from './typed-abstract-control.model';
import { TypedFormArray } from './typed-form-array.type';
import { TypedControl } from './typed-form-control.type';
import { FormGroupOverride } from './typed-form-group.model';

export type NestedControl<T> = {
  [P in keyof T]: T[P] extends Primitive | Array<Primitive>
    ? TypedControl<T[P]>
    : T[P] extends Array<unknown>
    ? TypedFormArray<T[P]>
    : FormGroupOverride<T[P]>;
} &
  TypedAbstractControl<T>;
