import { Action } from '@ngrx/store';

import { darkModeReducer } from './dark-mode-store/dark-mode.reducers';
import { languageSelectorReducer } from './language-selector-store/language-selector.reducers';
import { logoutButtonReducer } from './logout-button-store/logout-button.reducers';
import { spinnerReducer } from './spinner-store/spinner.reducer';

export interface GlobalState {
    isDark: boolean;
    language: string;
    isLogout: boolean;
    isSpinnerOn: boolean;
}

export const globalSetReducersKey = 'globalSetReducers';

export function globalSetReducers(
    state: GlobalState | undefined,
    action: Action,
): GlobalState {
    return {
        isDark: state
            ? darkModeReducer({ isDark: state.isDark }, action).isDark
            : false,
        language: state
            ? languageSelectorReducer({ language: state?.language }, action)
                  .language
            : 'ru',
        isLogout: state
            ? logoutButtonReducer({ isLogout: state?.isLogout }, action)
                  .isLogout
            : false,
        isSpinnerOn: state
            ? spinnerReducer({ isSpinnerOn: state?.isSpinnerOn }, action)
                  .isSpinnerOn
            : false,
    };
}
