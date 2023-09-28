import { Component } from '@angular/core';
import { projectTechnologies } from 'utils/project-technologies';

@Component({
  selector: 'cv-initial-content',
  templateUrl: './initial-content.component.html',
  styleUrls: ['./initial-content.component.scss']
})
export class InitialContentComponent {
  public technologiesList = projectTechnologies;
}
