import { Component, Input } from '@angular/core';

@Component({
	selector: 'cv-item',
	templateUrl: './cv-item.component.html',
	styleUrls: ['./cv-item.component.scss']
})
export class CvItemComponent {
	@Input() public downloadPath: string = ''
	@Input() public imgPath: string = ''
	@Input() public currentText: string = ''
}
