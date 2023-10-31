import { createSelector } from '@ngrx/store';

import { DarkModeType } from '../model/dark-mode.type';

export interface State {
    mode: DarkModeType;
}

export const darkModeSelector = createSelector(
    (state: State) => state.mode,
    (mode: boolean) => mode
);
