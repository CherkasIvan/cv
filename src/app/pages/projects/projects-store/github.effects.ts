import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';

import { GitHubService } from '../services/git-hub/git-hub.service';
import * as GithubReposActions from './github.actions';

@Injectable()
export class UserReposEffects {
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
