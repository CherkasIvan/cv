import { createReducer, on } from '@ngrx/store';

import { languageSelectorType } from '../model/language-selector.interface';
import { getLanguage } from './language-selector.actions';

const initialState: languageSelectorType = 'ru';

export const languageSelectorReducer = createReducer(
    initialState,
    on(getLanguage, (state) => state)
);
