import {FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';

import {NestedControl} from '../utility-types/nested-control.type';

export interface TypedFormGroup<T> extends FormGroup {
  value: Partial<T>;
  valueChanges: Observable<T>;

  controls: NestedControl<T>;

  setValue(value: T, options?: {}): void;

  patchValue(value: Partial<T>, options?: {}): void;

  getRawValue(): T;
}
