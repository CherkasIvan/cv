import { createAction } from '@ngrx/store';

export const spinnerWork = createAction(
    '[SPINNER] Spinner work',
    (isSpinnerOn: boolean) => ({ isSpinnerOn }),
);
