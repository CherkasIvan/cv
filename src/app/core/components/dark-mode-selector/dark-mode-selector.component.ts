import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DarkModeService } from '@core/services/dark-mode/dark-mode.service';
import { getMode } from '@core/store/dark-mode-store/dark-mode.actions';
import { DarkModeType } from '@core/store/model/dark-mode.type';
import { Store } from '@ngrx/store';
import { localStorageService } from '@shared/services/localstorage/local-storage.service';

@Component({
    selector: 'cv-dark-mode-selector',
    standalone: true,
    imports: [],
    templateUrl: './dark-mode-selector.component.html',
    styleUrls: ['./dark-mode-selector.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DarkModeSelectorComponent {
    public isChecked$ = this._store$.select((darkModeSelector) => false);

    constructor(
        private readonly _darkModeService: DarkModeService,
        private readonly _localStorageService: localStorageService,
        private _store$: Store<DarkModeType>
    ) {}

    public changeView($event: MouseEvent) {
        this._store$.dispatch(
            getMode((<HTMLInputElement>$event.target).checked)
        );
        this._darkModeService.isDark$.next(Boolean(this.isChecked$));
        this._localStorageService.setMode(this.isChecked$.toString());
    }
}

