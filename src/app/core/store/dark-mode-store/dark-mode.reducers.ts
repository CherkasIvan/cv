import { createReducer, on } from '@ngrx/store';

import { DarkModeType } from '../model/dark-mode.type';
import { setMode, setModeSuccess } from './dark-mode.actions';

const initialState: any = {
    isDark: false
};

export const darkModeReducer = createReducer(
    initialState,
    on(setModeSuccess, (state) => ({ ...state, isDark: state.isDark }))
);
