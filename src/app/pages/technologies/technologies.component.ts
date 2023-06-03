import { Component } from '@angular/core';
import { backendTech } from '@assets/constants/backend-tech';
import { frontendTech } from '@assets/constants/frontend-tech';
import { otherTech } from '@assets/constants/other-tech';
import { socialTech } from '@assets/constants/social-tech';

@Component({
  selector: 'cv-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss'],
})
export class TechnologiesComponent {
  public frontendTech = frontendTech;
  public backendTech = backendTech;
  public socialTech = socialTech;
  public otherTech = otherTech;
}
