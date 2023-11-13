import { createReducer, on } from '@ngrx/store';

import { setLogoutDialogSuccess } from './logout-button.actions';

const initialState: boolean = false;

export const logoutButtonReducer = createReducer(
    initialState,
    on(setLogoutDialogSuccess, (state, { isLogout }) => isLogout),
);
