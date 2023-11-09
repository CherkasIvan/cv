import { ActionReducerMap } from '@ngrx/store';

import { darkModeReducer } from './dark-mode-store/dark-mode.reducers';
import { languageSelectorReducer } from './language-selector-store/language-selector.reducers';
import { logoutButtonReducer } from './logout-button-store/logout-button.reducers';

export interface GlobalState {
    isDark: boolean;
    language: string;
    isLogout: boolean;
}

export const globalSetReducers: ActionReducerMap<GlobalState> = {
    isDark: darkModeReducer,
    language: languageSelectorReducer,
    isLogout: logoutButtonReducer,
};
