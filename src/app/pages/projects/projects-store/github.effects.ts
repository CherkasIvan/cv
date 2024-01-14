import { Injectable } from '@angular/core';

import { map, mergeMap } from 'rxjs/operators';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { GitHubService } from '../services/git-hub/git-hub.service';
import * as GithubReposActions from './github.actions';

@Injectable()
export class GithubEffects {
    loadUserRepos$ = createEffect(() =>
        this.actions$.pipe(
            ofType(GithubReposActions.loadGithubRepos),
            mergeMap(() =>
                this.githubService.getGithubRepos().pipe(
                    map((githubRepos) =>
                        GithubReposActions.loadGithubReposSuccess({
                            githubRepos,
                        }),
                    ),
                ),
            ),
        ),
    );
    constructor(
        private actions$: Actions,
        private readonly githubService: GitHubService,
    ) {}
}
