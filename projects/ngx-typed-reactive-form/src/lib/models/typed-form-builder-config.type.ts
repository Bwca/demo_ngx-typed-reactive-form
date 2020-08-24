import {Primitive} from './utility-types/primitive.type';

export type TypedFormBuilderConfig<T> = {
  [P in keyof T]: T[P] extends Primitive
    ? T[P] | [T[P], ...unknown[]]
    : T[P] extends Array<unknown>
      ? T[P] | [T[P], ...unknown[]]
          : TypedFormBuilderConfig<T[P]>
};
