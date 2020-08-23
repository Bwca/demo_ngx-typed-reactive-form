import { TypedAbstractControl } from './typed-abstract-control.model';

export type TypedFormArray<T> = {
  controls: TypedAbstractControl<T>[];
  at(index: number): TypedAbstractControl<T>;
  push(control: TypedAbstractControl<T>): void;
  insert(index: number, control: TypedAbstractControl<T>): void;
};
