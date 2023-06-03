import { Component } from '@angular/core';
import { cvFormat } from '@assets/constants/cv-format';

@Component({
  selector: 'cv-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
})
export class CvComponent {
  public cvList = cvFormat;
}
