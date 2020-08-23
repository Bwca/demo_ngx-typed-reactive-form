import {AbstractControl, FormArray, FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';

type TypedControls<T> = {
  [K in keyof T & string]: TypedFormGroup<T[K]>
}

export interface TypedFormGroup<T, P extends FormGroup | FormArray = FormGroup | FormArray> extends FormGroup {
  value: Partial<T>;
  valueChanges: Observable<Partial<T>>;
  parent: P;
 // controls: TypedControls<T>;

  setValue(val: T): void;
  getRawValue(): T;
  patchValue(val: Partial<T>): void;
  get<C>(path: keyof T & string): C extends unknown ? FormControl : TypedFormGroup<C>;
}
