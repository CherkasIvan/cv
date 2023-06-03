import { Component } from '@angular/core';
import { cvFormat } from 'utils/cv-format';

@Component({
	selector: 'cv-cv',
	templateUrl: './cv.component.html',
	styleUrls: ['./cv.component.scss'],
})
export class CvComponent {
	public cvList = cvFormat;
}
