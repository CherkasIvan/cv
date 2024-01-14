import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ILanguagesSelector } from '../model/language-selector.interface';

export const languageFeatureSelector =
    createFeatureSelector<ILanguagesSelector>('language');

// Создайте selector, который выбирает значение isDark из состояния dark mode
export const languageSelector = createSelector(
    languageFeatureSelector,
    (state: ILanguagesSelector) => state.language,
);
