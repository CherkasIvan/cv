import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ISpinner } from '../model/spinner.interface';

export const spinnerFeatureSelector =
    createFeatureSelector<ISpinner>('spinner');

export const spinnerSelector = createSelector(
    spinnerFeatureSelector,
    (state: ISpinner) => state.isSpinnerOn,
);
