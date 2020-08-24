import { TypedFormArray } from '../typed-reactive-controls/typed-form-array.type';
import { TypedFormControl } from '../typed-reactive-controls/typed-form-control.type';
import { TypedFormGroup } from '../typed-reactive-controls/typed-form-group.model';
import { Primitive } from './primitive.type';

export type NestedControl<T> = {
  [P in keyof T]: T[P] extends Primitive | Array<Primitive>
    ? TypedFormControl<T[P]>
    : T[P] extends Array<infer U>
    ? TypedFormArray<U>
    : TypedFormGroup<T[P]>;
};
