import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ITechnologies } from '@shared/models/tecnologies.interface';

import { pwaView } from '@utils/functions/pwaView';

@Component({
    selector: 'cv-skills-content',
    templateUrl: './skills-content.component.html',
    standalone: true,
    imports: [CommonModule],
    styleUrls: ['./skills-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsContentComponent {
    @Input() public technologiesList: ITechnologies[] = [];

    public isPwaView: boolean = pwaView;
}
