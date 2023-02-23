import { Component } from '@angular/core';
import { workExperience } from 'src/assets/constants/work-experience';

@Component({
  selector: 'cv-work-experience-content',
  templateUrl: './work-experience-content.component.html',
  styleUrls: ['./work-experience-content.component.scss'],
})
export class WorkExperienceContentComponent {
  public workPlace = workExperience;
}
