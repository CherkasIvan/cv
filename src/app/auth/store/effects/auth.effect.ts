import { of } from 'rxjs';

import { Injectable } from '@angular/core';

import { catchError, map, switchMap } from 'rxjs/operators';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { AuthService } from '../../services/auth.service';
import { authFailure, authSuccess } from '../actions/auth.action';
import { auth } from '../actions/auth.action';

@Injectable()
export class AuthEffects {
    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(auth),
            switchMap(({ email, password }) =>
                this.authService.signIn(email, password).pipe(
                    map((user) => authSuccess({ user })),
                    catchError((error) => of(authFailure({ error }))),
                ),
            ),
        ),
    );

    constructor(
        private actions$: Actions,
        private authService: AuthService,
    ) {}
}
