import * as fromRouter from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { routerAdapter } from '../reducers/router-reducer';

// const routerAdapter  = routerAdapter.getSelectors();

export interface State {
    [fromRouter.DEFAULT_ROUTER_FEATURENAME]: fromRouter.RouterReducerState<any>;
}

export const selectRouter = createFeatureSelector<State>(fromRouter.DEFAULT_ROUTER_FEATURENAME);

// const routerSelectors = fromRouter.getSelectors(selectRouter);

export const {
    selectCurrentRoute, // select the current route
    selectFragment, // select the current route fragment
    selectQueryParams, // select the current route query params
    selectQueryParam, // factory function to select a query param
    selectRouteParams, // select the current route params
    selectRouteParam, // factory function to select a route param
    selectRouteData, // select the current route data
    selectRouteDataParam, // factory function to select a route data param
    selectUrl, // select the current url
    selectTitle, // select the title if available
} = fromRouter.getRouterSelectors();
// export const selectCurrentRout = routerSelectors.selectCurrentRoute

// export const carsFeatureSelector = createFeatureSelector<CarState>('route');

const { selectEntities } = routerAdapter.getSelectors();

export const selectRouterEntities = createSelector(selectRouter, selectEntities);

// export const selectCars = createSelector(carsFeatureSelector, selectAll);

// you can combine the `selectRouteParams` with `selectCarEntities`
// to get a selector for the active car for this component based
// on the route
// export const selectCar = createSelector(
//   selectCarEntities,
//   selectRouteParams,
//   (cars, { carId }) => cars[carId]
// );

// export const selectQueryName = selectQueryParam('name');
// export const selectQuerySurname = selectQueryParam('surname');

// export const selectCategoryIdRiuterParam = selectRouteParam('categoryId')
