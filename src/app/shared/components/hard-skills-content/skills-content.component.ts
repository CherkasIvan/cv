import { Component, Input } from '@angular/core';
import { ITechnology } from '@shared/models/technology.interface';
import { pwaView } from 'utils/functions/pwaView';

@Component({
  selector: 'cv-skills-content',
  templateUrl: './skills-content.component.html',
  styleUrls: ['./skills-content.component.scss'],
})
export class SkillsContentComponent {
  @Input() public technologiesList: ITechnology[] = [];
  public isPwaView: boolean = pwaView;
}
