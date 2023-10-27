import { ChangeDetectionStrategy, Component } from '@angular/core';

import { DarkModeService } from '@core/services/dark-mode/dark-mode.service';

@Component({
  selector: 'cv-dark-mode-selector',
  standalone: true,
  imports: [],
  templateUrl: './dark-mode-selector.component.html',
  styleUrls: ['./dark-mode-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DarkModeSelectorComponent {
  constructor(private readonly _darkModeService: DarkModeService) {}

  changeView($target: MouseEvent) {
    const isChecked = (<HTMLInputElement>$target.target).checked;
    this._darkModeService.isDark$.next(isChecked);
  }
}
