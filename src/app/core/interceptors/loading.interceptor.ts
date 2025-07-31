import { Observable, finalize } from 'rxjs';

import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import { ISpinner } from '@layout/store/model/spinner.interface';
import {
    hideSpinner,
    showSpinner,
} from '@layout/store/spinner-store/spinner.actions';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
    private totalRequests = 0;
    constructor(private _store: Store<ISpinner>) {}

    intercept(
        req: HttpRequest<unknown>,
        next: HttpHandler,
    ): Observable<HttpEvent<unknown>> {
        this._store.dispatch(showSpinner()); // dispatch showSpinner action before each request
        return next.handle(req).pipe(
            finalize(() => {
                this._store.dispatch(hideSpinner()); // dispatch hideSpinner action after each request
            }),
        );
    }
}
