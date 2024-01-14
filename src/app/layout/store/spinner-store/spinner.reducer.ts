import { createReducer, on } from '@ngrx/store';

import { ISpinner } from '../model/spinner.interface';
import { spinnerWork } from './spinner.actions';

export const initialSpinnerModeState: ISpinner = {
    isSpinnerOn: false,
};

export const spinnerReducer = createReducer(
    initialSpinnerModeState,
    on(spinnerWork, (state, { isSpinnerOn }) => ({ isSpinnerOn })),
);
