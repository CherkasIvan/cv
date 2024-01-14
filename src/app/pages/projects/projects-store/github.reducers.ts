import { createReducer, on } from '@ngrx/store';

import { IGitHub } from '../models/github.interface';
import * as GithubReposActions from './github.actions';

export const githubReposFeatureKey = 'githubRepos';

export interface State {
    githubRepos: IGitHub[];
}

export const initialState: State = {
    githubRepos: [],
};

export const githubReducer = createReducer(
    initialState,
    on(GithubReposActions.loadGithubReposSuccess, (state, action) => ({
        ...state,
        githubRepos: action.githubRepos,
    })),
);
