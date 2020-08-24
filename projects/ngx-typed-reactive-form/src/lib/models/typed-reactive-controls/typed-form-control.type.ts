import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export interface TypedFormControl<T> extends FormControl {
  value: Partial<T>;
  valueChanges: Observable<T>;

  setValue(value: T, options?: {}): void;

  patchValue(value: Partial<T>, options?: {}): void;
}
