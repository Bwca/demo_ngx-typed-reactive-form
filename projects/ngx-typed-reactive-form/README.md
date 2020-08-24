# NgxTypedReactiveForm

## What is it

It is an attempt to bring types to Angular's Reactive Forms using generics. For the sake of intellisense and better developer experience.

## Features

- No overrides.
- No API to learn.
- Types for `Valuechanges`, `value`, etc.
- Four generic types:
    - TypedFormBuilderConfig
    - TypedFormControl
    - TypedFormGroup
    - TypedFormArray


## Usage
- Start with a model:

```
export interface UserDto {
    name: string;
    about: string;
    registered: string;
  }
```


- Generate a strongly typed `TypedFormBuilderConfig` based on the model, to use with Reactive Forms `FormBuilder`:
```
export const USER_FORM_CONFIG: TypedFormBuilderConfig<UserDto> = {
    /** NOTE: value is strongly typed */
  name: ['John Doe', Validators.required],
  about: ['This is a generic description', Validators.required],
  registered: ['1992-12-12', Validators.required],
};
```

- Create a typed reactive form:
```
export class DemoComponent implements OnInit {
  public userFormGroup: TypedFormGroup<UserDto>;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userFormGroup = this.fb.group(USER_FORM_CONFIG) as TypedFormGroup<UserDto>;
  }
}
```

- Enjoy intellisense in template and form's methods, don't forget to star in on github if you like it.