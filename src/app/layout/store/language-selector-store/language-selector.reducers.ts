import { createReducer, on } from '@ngrx/store';

import { setLanguageSuccess } from './language-selector.actions';

const initialState: string = 'ru';

export const languageSelectorReducer = createReducer(
    initialState,
    on(setLanguageSuccess, (state, { currentLanguage }) => currentLanguage),
);
