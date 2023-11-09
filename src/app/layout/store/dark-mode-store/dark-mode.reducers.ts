import { createReducer, on } from '@ngrx/store';

import { setModeSuccess } from './dark-mode.actions';

const initialState: boolean = false;

export const darkModeReducer = createReducer(
    initialState,
    on(setModeSuccess, (state, { isDark }) => isDark),
);
