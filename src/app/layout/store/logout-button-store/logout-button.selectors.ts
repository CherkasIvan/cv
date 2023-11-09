import { createSelector } from '@ngrx/store';

import { ILogoutButton } from '../model/logout-button.interface';

export const logoutButtonSelector = createSelector(
    (state: ILogoutButton) => state.isLogout,
    (isLogout: boolean) => isLogout,
);
