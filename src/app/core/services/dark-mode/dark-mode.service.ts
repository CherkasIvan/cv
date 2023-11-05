import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

import { darkModeSelector } from '@core/store/dark-mode-store/dark-mode.selectors';
import { IDarkMode } from '@core/store/model/dark-mode.interface';

@Injectable({
    providedIn: 'root'
})
export class DarkModeService {
    public isDark$: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor(private _store$: Store<IDarkMode>) {
        this._store$.pipe(select(darkModeSelector)).subscribe((isDark) => {
            console.log(isDark);
            this.isDark$.next(isDark);
        });
    }
}
