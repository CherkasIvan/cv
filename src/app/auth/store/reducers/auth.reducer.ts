import { createReducer, on } from '@ngrx/store';

import {
    auth,
    authFailure,
    authSuccess,
    disauth,
} from '../actions/auth.action';
import { AuthState } from '../model/auth-state.interface';

export const initialState: AuthState = {
    user: null,
    isFetching: false,
};

export const authReducer = createReducer(
    initialState,
    on(auth, (state) => state),
    on(disauth, (state) => ({ ...state, email: '', password: '' })),
    on(authSuccess, (state) => ({
        ...state,
        user: {
            email: state.user?.email as string,
            password: state.user?.password as string,
        },
    })),
    on(authFailure, (state) => ({ ...state, email: '', password: '' })),
);

export const authReducerFeatureKey = 'auth';
