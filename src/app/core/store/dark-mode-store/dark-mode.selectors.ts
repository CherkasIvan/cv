import { createSelector } from '@ngrx/store';

import { DarkModeType } from '../model/dark-mode.type';

// export interface State {
//     mode: DarkModeType;
// }

export const darkModeSelector = createSelector(
    (state: DarkModeType) => state,
    (mode: DarkModeType) => mode
);
