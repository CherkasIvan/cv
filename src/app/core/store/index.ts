import { ActionReducerMap } from '@ngrx/store';

import { darkModeReducer } from './dark-mode-store/dark-mode.reducers';
import { languageSelectorReducer } from './language-selector-store/language-selector.reducers';

export interface DarkModeState {
    isDark: boolean;
}

export interface LanguageModeState {
    language: string;
}

export const darkMode: ActionReducerMap<DarkModeState> = {
    isDark: darkModeReducer
};

export const languageMode: ActionReducerMap<LanguageModeState> = {
    language: languageSelectorReducer
};
