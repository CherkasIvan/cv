import { ActionReducerMap } from '@ngrx/store';

import { darkModeReducer } from './dark-mode-store/dark-mode.reducers';

export interface State {
    isDark: boolean;
}

export const reducer: ActionReducerMap<State> = {
    isDark: darkModeReducer
};
