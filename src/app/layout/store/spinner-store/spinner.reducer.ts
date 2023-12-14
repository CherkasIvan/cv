import { createReducer, on } from '@ngrx/store';

import { startSpinner, stopSpinner } from './spinner.actions';

const initialState: boolean = false;

export const spinnerReducer = createReducer(
    initialState,
    on(startSpinner, (state, { isSpinnerOn }) => isSpinnerOn),
    on(stopSpinner, (state, { isSpinnerOn }) => isSpinnerOn),
);
