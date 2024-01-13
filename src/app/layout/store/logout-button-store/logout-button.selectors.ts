import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ILogoutButton } from '../model/logout-button.interface';

export const logoutButtonFeatureSelector =
    createFeatureSelector<ILogoutButton>('isLogout');

// Создайте selector, который выбирает значение isDark из состояния dark mode
export const logoutButtonSelector = createSelector(
    logoutButtonFeatureSelector,
    (state: ILogoutButton) => state.isLogout,
);
