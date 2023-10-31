import { createSelector } from '@ngrx/store';

import { languageSelectorType } from '../model/language-selector.type';

export interface State {
  language: languageSelectorType;
}

export const languageSelectorSelector = createSelector(
  (state: State) => state.language,
  (language: string) => language
);
