import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromGithubRepos from './github.reducers';

export const selectGithubReposState =
    createFeatureSelector<fromGithubRepos.State>(
        fromGithubRepos.githubReposFeatureKey,
    );

export const selectGithubRepos = createSelector(
    selectGithubReposState,
    (state) => state.githubRepos,
);
