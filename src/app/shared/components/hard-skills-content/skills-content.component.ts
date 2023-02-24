import { Component, Input } from '@angular/core';

@Component({
  selector: 'cv-skills-content',
  templateUrl: './skills-content.component.html',
  styleUrls: ['./skills-content.component.scss'],
})
export class SkillsContentComponent {
  @Input() public technologiesList: any[] = [];
}
