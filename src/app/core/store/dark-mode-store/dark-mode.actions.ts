import { createAction } from '@ngrx/store';

export const setMode = createAction('[DARK_MODE_SELECTOR] Set mode');

export const setModeSuccess = createAction(
    '[DARK_MODE_SELECTOR] Set mode success',
    (mode: boolean) => ({ mode })
);
