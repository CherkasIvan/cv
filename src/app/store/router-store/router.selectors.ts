import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IRouterState } from '../models/router-state.interface';

export const selectRouterState =
    createFeatureSelector<RouterReducerState<IRouterState>>('router');

export const selectParams = createSelector(
    selectRouterState,
    (router) => router?.state?.params,
);

export const selectQueryParams = createSelector(
    selectRouterState,
    (router) => router?.state?.queryParams,
);

export const selectUrl = createSelector(
    selectRouterState,
    (router) => router?.state?.url,
);
