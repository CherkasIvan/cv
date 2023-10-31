import { createAction, props } from '@ngrx/store';

export const auth = createAction('[Auth Page] Auth');

export const authSuccess = createAction(
    '[Auth Page] Auth succes',
    props<{ email: string | null; password: string | null }>()
);

export const disauth = createAction('[Auth Page] Disauth');

export const authFailure = createAction(
    '[Auth Page] Auth failure',
    props<{ email: string | null; password: string | null }>()
);
