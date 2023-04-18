import { Component } from '@angular/core';
import { backendTech } from 'src/assets/constants/backend-tech';
import { frontendTech } from 'src/assets/constants/frontend-tech';
import { otherTech } from 'src/assets/constants/other-tech';
import { socialTech } from 'src/assets/constants/social-tech';

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
