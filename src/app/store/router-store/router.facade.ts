import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { Params } from '@angular/router';

import { Store } from '@ngrx/store';

import { selectParams, selectQueryParams, selectUrl } from './router.selectors';

@Injectable({
    providedIn: 'root',
})
export class RouterFacadeService {
    constructor(private readonly store: Store) {}

    readonly getParams$: Observable<Params> = this.store.select(selectParams);

    readonly getQueryParams$: Observable<Params> =
        this.store.select(selectQueryParams);

    readonly getUrl$: Observable<string> = this.store.select(selectUrl);
}
