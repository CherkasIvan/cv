import { createSelector } from '@ngrx/store';

import { IDarkMode } from '../model/dark-mode.interface';

export const darkModeSelector = createSelector(
    (state: IDarkMode) => state.isDark,
    (isDark: boolean) => isDark,
);
