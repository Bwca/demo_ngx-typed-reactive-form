import {FormArray} from '@angular/forms';
import {Observable} from 'rxjs';

import {TypedFormControl} from './typed-form-control.type';
import {TypedFormGroup} from './typed-form-group.model';

export interface TypedFormArray<T> extends FormArray {
  value: Partial<T>;
  valueChanges: Observable<T>;

  controls: TypedFormGroup<T>[];
}
