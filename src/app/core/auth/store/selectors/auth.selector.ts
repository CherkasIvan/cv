import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authReducerFeatureKey } from '../reducers/auth.reducer';
import { AuthState } from '../model/auth-state.interface';

export const selectAuthState = createFeatureSelector<AuthState>(
  authReducerFeatureKey
);

export const selectAuth = createSelector(
  selectAuthState,
  (state: AuthState) => state.user
);
