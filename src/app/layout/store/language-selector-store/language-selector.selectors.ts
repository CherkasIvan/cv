import { createSelector } from '@ngrx/store';

import { ILanguagesSelector } from '../model/language-selector.interface';

export const languageSelector = createSelector(
    (state: ILanguagesSelector) => state.language,
    (language: string) => language,
);
