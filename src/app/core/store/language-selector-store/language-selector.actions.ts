import { createAction } from '@ngrx/store';

export const getLanguage = createAction(
  'LANGUAGE_SELECTOR Get language',
  (currentLanguage: string) => ({ currentLanguage })
);
