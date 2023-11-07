import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { localStorageService } from '@shared/services/localstorage/local-storage.service';

import { setMode, setModeSuccess } from '@app/layout/store/dark-mode-store/dark-mode.actions';
import { darkModeSelector } from '@app/layout/store/dark-mode-store/dark-mode.selectors';
import { IDarkMode } from '@app/layout/store/model/dark-mode.interface';

@Component({
    selector: 'cv-dark-mode-selector',
    standalone: true,
    imports: [],
    templateUrl: './dark-mode-selector.component.html',
    styleUrls: ['./dark-mode-selector.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DarkModeSelectorComponent {
    public isChecked$ = this._store$.pipe(select(darkModeSelector));
    constructor(
        private readonly _localStorageService: localStorageService,
        private _store$: Store<IDarkMode>,
    ) {}

    public changeView($event: MouseEvent): void {
        this._store$.dispatch(setMode());
        this._store$.dispatch(setModeSuccess((<HTMLInputElement>$event.target).checked));
        this._localStorageService.setMode(this.isChecked$.toString());
    }
}
