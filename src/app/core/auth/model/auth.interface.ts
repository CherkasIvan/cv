import { FormControl } from '@angular/forms';

export interface IAuth {
  readonly firstName: FormControl<string | null>;
  readonly email: FormControl<string | null>;
}
