import { createAction } from '@ngrx/store';

export const setLanguage = createAction('[DARK_MODE_SELECTOR] Set language');

export const setLanguageSuccess = createAction(
    'LANGUAGE_SELECTOR Set language',
    (currentLanguage: string) => ({
        currentLanguage,
    }),
);
