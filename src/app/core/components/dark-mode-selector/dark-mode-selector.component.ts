import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { DarkModeService } from '@core/services/dark-mode/dark-mode.service';
import {
    setMode,
    setModeSuccess
} from '@core/store/dark-mode-store/dark-mode.actions';
import { darkModeSelector } from '@core/store/dark-mode-store/dark-mode.selectors';
import { DarkModeType } from '@core/store/model/dark-mode.type';

import { localStorageService } from '@shared/services/localstorage/local-storage.service';

@Component({
    selector: 'cv-dark-mode-selector',
    standalone: true,
    imports: [],
    templateUrl: './dark-mode-selector.component.html',
    styleUrls: ['./dark-mode-selector.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DarkModeSelectorComponent {
    public isChecked$ = this._store$.pipe(select(darkModeSelector));
    constructor(
        private readonly _darkModeService: DarkModeService,
        private readonly _localStorageService: localStorageService,
        private _store$: Store<DarkModeType>
    ) {}

    public changeView($event: MouseEvent) {
        this._store$.dispatch(setMode());
        this._store$.dispatch(
            setModeSuccess((<HTMLInputElement>$event.target).checked)
        );
        // this._darkModeService.isDark$.next(
        //     (<HTMLInputElement>$event.target).checked
        // );
        // this._localStorageService.setMode(this.isChecked$.toString());
    }
}
