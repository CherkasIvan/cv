import { createReducer, on } from '@ngrx/store';

import { ILogoutButton } from '../model/logout-button.interface';
import { setLogoutDialogSuccess } from './logout-button.actions';

export const initialLogoutModeState: ILogoutButton = {
    isLogout: false,
};

export const logoutButtonReducer = createReducer(
    initialLogoutModeState,
    on(setLogoutDialogSuccess, (state, { isLogout }) => ({ isLogout })),
);
