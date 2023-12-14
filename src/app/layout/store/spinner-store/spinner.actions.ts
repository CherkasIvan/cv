import { createAction } from '@ngrx/store';

export const startSpinner = createAction(
    '[SPINNER] Show spinner',
    (isSpinnerOn: boolean) => ({ isSpinnerOn }),
);

export const stopSpinner = createAction(
    '[SPINNER] Hide spinner',
    (isSpinnerOn: boolean) => ({ isSpinnerOn }),
);
