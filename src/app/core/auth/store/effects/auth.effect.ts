import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { authSuccess, authFailure } from '../actions/auth.action';
import { AuthService } from '../../services/auth.service';
import { auth } from '../actions/auth.action';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(auth),
      switchMap(({ email, password }) =>
        this.authService.signIn(email, password).pipe(
          map((user) => authSuccess({ user })),
          catchError((error) => of(authFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}
}
