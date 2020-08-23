import {FormControl} from '@angular/forms';

import {OverrideProperties} from './override-properties.type';
import {TypedAbstractControl} from './typed-abstract-control.model';

export type TypedControl<T> = OverrideProperties<FormControl,
  TypedAbstractControl<T>> &
  TypedAbstractControl<T>;
