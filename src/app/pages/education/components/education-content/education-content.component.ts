import { Component } from '@angular/core';
import { education } from 'src/assets/constants/education';

@Component({
  selector: 'cv-education-content',
  templateUrl: './education-content.component.html',
  styleUrls: ['./education-content.component.scss'],
})
export class EducationContentComponent {
  public educationList = education;
}
