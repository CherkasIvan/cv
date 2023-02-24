import { Component } from '@angular/core';
import { myTechnologies } from 'src/assets/constants/my-technologies';

@Component({
  selector: 'cv-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss'],
})
export class TechnologiesComponent {
  public frontendTech = myTechnologies[0];
  public backendTech = myTechnologies[1];
}
