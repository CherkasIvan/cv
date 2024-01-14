import { createReducer, on } from '@ngrx/store';

import { setLogoutDialogSuccess } from './logout-button.actions';

export interface LogoutModeState {
    isLogout: boolean;
}

export const initialLogoutModeState: LogoutModeState = {
    isLogout: false,
};

export const logoutButtonReducer = createReducer(
    initialLogoutModeState,
    on(setLogoutDialogSuccess, (state, { isLogout }) => ({ isLogout })),
);
