import {TypedFormArray} from './typed-reactive-controls/typed-form-array.type';
import {TypedFormControl} from './typed-reactive-controls/typed-form-control.type';
import {TypedFormGroup} from './typed-reactive-controls/typed-form-group.model';
import {Primitive} from './utility-types/primitive.type';

export type TypedFormBuilderConfig<T> = {
  [P in keyof T]: T[P] extends Primitive
    ? T[P] | [T[P], ...unknown[]] | TypedFormControl<T[P]>
    : T[P] extends Array<unknown>
      ? T[P] | [T[P], ...unknown[]] | TypedFormArray<T[P]>
      : TypedFormBuilderConfig<T[P]> | TypedFormGroup<T[P]> | TypedFormControl<T[P]>;
};