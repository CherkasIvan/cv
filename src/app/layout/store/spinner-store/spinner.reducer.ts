import { createReducer, on } from '@ngrx/store';

import { ISpinner } from '../model/spinner.interface';
import { hideSpinner, showSpinner } from './spinner.actions';

export const initialSpinnerModeState: ISpinner = {
    isSpinnerOn: false,
};

export const spinnerReducer = createReducer(
    initialSpinnerModeState,
    on(showSpinner, (state) => ({
        ...state,
        isSpinnerOn: true,
    })),
    on(hideSpinner, (state) => ({
        ...state,
        isSpinnerOn: false,
    })),
);
