import { createAction, props } from '@ngrx/store';

export const auth = createAction(
    '[Auth Page] Auth',
    props<{ email: string; password: string }>(),
);

export const authSuccess = createAction(
    '[Auth Page] Auth succes',
    props<{ user: unknown }>(),
);

export const disauth = createAction('[Auth Page] Disauth');

export const authFailure = createAction(
    '[Auth Page] Auth failure',
    props<{ error: unknown }>(),
);
