import { createSelector } from '@ngrx/store';

import { languageSelectorType } from '../model/language-selector.interface';

export interface State {
    language: languageSelectorType;
}

export const languageSelectorSelector = createSelector(
    (state: State) => state.language,
    (language: string) => language
);
