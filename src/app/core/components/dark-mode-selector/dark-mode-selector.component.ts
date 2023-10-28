import { ChangeDetectionStrategy, Component } from '@angular/core';

import { DarkModeService } from '@core/services/dark-mode/dark-mode.service';

import { localStorageService } from '@app/shared/services/localstorage/local-storage.service';

@Component({
  selector: 'cv-dark-mode-selector',
  standalone: true,
  imports: [],
  templateUrl: './dark-mode-selector.component.html',
  styleUrls: ['./dark-mode-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DarkModeSelectorComponent {
  constructor(
    private readonly _darkModeService: DarkModeService,
    private readonly _localStorageService: localStorageService
  ) {
    const mode = this._localStorageService.getUsersState();
  }

  changeView($target: MouseEvent) {
    const isChecked = (<HTMLInputElement>$target.target).checked;
    this._darkModeService.isDark$.next(isChecked);

    this._localStorageService.setMode(this._darkModeService.isDark$.value);
  }
}
