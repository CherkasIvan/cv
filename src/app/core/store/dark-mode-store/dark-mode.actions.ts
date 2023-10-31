import { createAction } from '@ngrx/store';

export const getMode = createAction(
    'DARK_MODE_SELECTOR Get mode',
    (mode: boolean) => ({ mode })
);
