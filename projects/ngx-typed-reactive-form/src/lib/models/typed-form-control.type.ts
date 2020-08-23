import {FormControl} from '@angular/forms';

import {OverriddenProperties} from './overridden-properties.type';
import {TypedAbstractControl} from './typed-abstract-control.model';

export type TypedControl<T> = OverriddenProperties<FormControl, TypedAbstractControl<T>> & TypedAbstractControl<T>;
