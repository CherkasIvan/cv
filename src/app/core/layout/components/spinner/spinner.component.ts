import { Component, Input } from '@angular/core';
import { SpinnerService } from '@core/services/spinner.service';


@Component({
	selector: 'cv-spinner',
	templateUrl: './spinner.component.html',
	styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
	@Input() spinnerStyle!: string

	constructor(public spinnerService: SpinnerService) {}
}
