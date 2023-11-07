import { ChangeDetectionStrategy, Component } from '@angular/core';

import { WorkExperienceContentComponent } from './components/work-experience-content/work-experience-content.component';

@Component({
    selector: 'cv-work-experience',
    templateUrl: './work-experience.component.html',
    styleUrls: ['./work-experience.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [WorkExperienceContentComponent],
})
export class WorkExperienceComponent {}
