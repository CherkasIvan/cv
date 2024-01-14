import { createEntityAdapter } from '@ngrx/entity';
import {
    DEFAULT_ROUTER_FEATURENAME,
    RouterReducerState,
    routerReducer,
} from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

export interface State {
    [DEFAULT_ROUTER_FEATURENAME]: RouterReducerState;
}

export const routerRedcer: ActionReducerMap<State> = {
    [DEFAULT_ROUTER_FEATURENAME]: routerReducer,
};

export const routerAdapter = createEntityAdapter<State>();
