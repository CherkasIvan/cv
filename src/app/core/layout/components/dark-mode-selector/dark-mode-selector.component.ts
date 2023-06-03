import { Component } from '@angular/core';
import { DarkModeService } from '@core/services/dark-mode.service';

@Component({
	selector: 'cv-dark-mode-selector',
	templateUrl: './dark-mode-selector.component.html',
	styleUrls: ['./dark-mode-selector.component.scss'],
})
export class DarkModeSelectorComponent {
	constructor(private darkModeService: DarkModeService) {}

	changeView($target: MouseEvent) {
		const isChecked = (<HTMLInputElement>$target.target).checked
		this.darkModeService.isDark$.next(isChecked);
	}
}
