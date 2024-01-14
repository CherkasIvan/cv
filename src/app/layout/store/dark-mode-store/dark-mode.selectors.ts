import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IDarkMode } from '../model/dark-mode.interface';

export const darkModeFeatureSelector =
    createFeatureSelector<IDarkMode>('darkMode');

export const darkModeSelector = createSelector(
    darkModeFeatureSelector,
    (state: IDarkMode) => state?.isDark ?? false,
);
