import { createAction } from '@ngrx/store';

export const setLogoutDialog = createAction(
    '[LOGOUT_BUTTON] Set logout button',
);

export const setLogoutDialogSuccess = createAction(
    '[LOGOUT_BUTTON] Set logout button',
    (isLogout: boolean) => ({ isLogout }),
);
