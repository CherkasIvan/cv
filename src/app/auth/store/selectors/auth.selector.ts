import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthState } from '../model/auth-state.interface';
import { authReducerFeatureKey } from '../reducers/auth.reducer';

export const selectAuthState = createFeatureSelector<AuthState>(
    authReducerFeatureKey,
);

export const selectAuth = createSelector(
    selectAuthState,
    (state: AuthState) => state.user,
);
