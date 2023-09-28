import { Component } from '@angular/core';
import { backendTech } from 'utils/backend-tech';
import { frontendTech } from 'utils/frontend-tech';
import { otherTech } from 'utils/other-tech';
import { socialTech } from 'utils/social-tech';

@Component({
  selector: 'cv-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent {
  public frontendTech = frontendTech;
  public backendTech = backendTech;
  public socialTech = socialTech;
  public otherTech = otherTech;
}
