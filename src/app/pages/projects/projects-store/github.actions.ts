import { createAction, props } from '@ngrx/store';

import { IGitHub } from '../models/github.interface';

export const loadGithubRepos = createAction('[User Repos] Load github Repos');
export const loadGithubReposSuccess = createAction(
    '[GITHUB REPOS] Load github Repos Success',
    props<{ githubRepos: IGitHub[] }>(),
);
