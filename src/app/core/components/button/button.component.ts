import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { DarkModeService } from '@core/services/dark-mode/dark-mode.service';

@Component({
  selector: 'cv-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() public downloadPath?: string;
  @Input() public label = '';
  public currentTheme$ = this.darkModeService.isDark$;

  constructor(private darkModeService: DarkModeService) {}
}
