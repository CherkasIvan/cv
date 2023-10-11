import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ITechnology } from '@core/models/technology.interface';
import { pwaView } from 'utils/functions/pwaView';

@Component({
	selector: 'cv-skills-content',
	templateUrl: './skills-content.component.html',
	standalone: true,
	imports: [CommonModule],
	styleUrls: ['./skills-content.component.scss']
})
export class SkillsContentComponent {
	@Input() public technologiesList: ITechnology[] = [];
	public isPwaView: boolean = pwaView;
}
