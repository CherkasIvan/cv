import { Component } from '@angular/core';
import { DarkModeService } from 'src/app/core/services/dark-mode.service';

@Component({
  selector: 'cv-dark-mode-selector',
  templateUrl: './dark-mode-selector.component.html',
  styleUrls: ['./dark-mode-selector.component.scss'],
})
export class DarkModeSelectorComponent {
  constructor(private darkModeService: DarkModeService) {}

  changeView(event: any) {
    this.darkModeService.isDark$.next(event.target.checked);
  }
}
