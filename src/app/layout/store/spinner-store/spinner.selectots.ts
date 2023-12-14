import { createSelector } from '@ngrx/store';

import { ISpinner } from '../model/spinner.interface';

export const spinnerSelector = createSelector(
    (state: ISpinner) => state.isSpinnerOn,
    (isSpinnerOn: boolean) => isSpinnerOn,
);
