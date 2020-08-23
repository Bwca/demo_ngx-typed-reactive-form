import {AbstractControl} from '@angular/forms';
import {Observable} from 'rxjs';

export interface TypedAbstractControl<T> extends AbstractControl {
  value: Partial<T>;
  valueChanges: Observable<T>;

  setValue(value: T, options?: {}): void;
  patchValue(value: Partial<T>, options?: {}): void;
}
