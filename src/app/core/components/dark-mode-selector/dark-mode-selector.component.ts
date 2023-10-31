import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';

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
  public isChecked = false;

  constructor(
    private readonly _darkModeService: DarkModeService,
    private readonly _localStorageService: localStorageService
  ) {}

  public changeView($event: MouseEvent) {
    this.isChecked = (<HTMLInputElement>$event.target).checked;
    this._darkModeService.isDark$.next(this.isChecked);
    this._localStorageService.setMode(this.isChecked.toString());
  }
}
