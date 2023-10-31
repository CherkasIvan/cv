import { createReducer, on } from '@ngrx/store';

import { DarkModeType } from '../model/dark-mode.type';
import { getMode } from './dark-mode.actions';

const initialState: DarkModeType = false;

export const darkModeReducer = createReducer(
    initialState,
    on(getMode, (state, { mode }) => mode)
);
