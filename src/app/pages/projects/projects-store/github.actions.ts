import { createAction, props } from '@ngrx/store';

import { IGitHub } from '../models/github.interface';

export const loadGithubRepos = createAction('[User Repos] Load github repos');
export const loadGithubReposSuccess = createAction(
    '[GITHUB REPOS] Load github repos success',
    props<{ githubRepos: IGitHub[] }>(),
);
