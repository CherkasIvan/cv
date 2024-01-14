import { createReducer, on } from '@ngrx/store';

import { setLanguageSuccess } from './language-selector.actions';

export interface LanguageModeState {
    language: string;
}

export const initialLanguageModeState: LanguageModeState = {
    language: 'ru',
};

export const languageSelectorReducer = createReducer(
    initialLanguageModeState,
    on(setLanguageSuccess, (state, { language }) => ({ language })),
);
