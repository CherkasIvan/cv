import { ChangeDetectionStrategy, Component } from '@angular/core';
import { fadeIn } from '@app/core/animations/route-animation';

@Component({
    selector: 'cv-work-experience',
    templateUrl: './work-experience.component.html',
    styleUrls: ['./work-experience.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        fadeIn
        ]
})
export class WorkExperienceComponent {}
