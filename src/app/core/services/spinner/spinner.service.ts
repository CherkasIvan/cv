import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class SpinnerService {
    private _loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
        false,
    );
    public readonly loading$: Observable<boolean> =
        this._loading$.asObservable();

    public show() {
        this._loading$.next(true);
    }

    public hide() {
        this._loading$.next(false);
    }
}
