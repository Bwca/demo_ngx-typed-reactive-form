import { Primitive } from './primitive.type';
import { TypedFormArray } from './typed-form-array.type';
import { TypedControl } from './typed-form-control.type';
import { TypedFormGroup } from './typed-form-group.model';

export type TypedFormBuilderConfig<T> = {
  [P in keyof T]: T[P] extends Primitive
    ? T[P] | [T[P], ...unknown[]] | TypedFormGroup<T[P]>
    : T[P] extends Array<unknown>
    ? T[P] | [T[P], ...unknown[]] | TypedFormArray<T[P]>
    : TypedFormBuilderConfig<T[P]> | TypedFormGroup<T[P]> | TypedControl<T[P]>;
};
