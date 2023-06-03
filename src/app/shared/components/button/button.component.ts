import { Component, Input } from '@angular/core';

@Component({
	selector: 'cv-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
	@Input() public label!: string
}
