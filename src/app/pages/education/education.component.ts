import { ChangeDetectionStrategy, Component } from '@angular/core';
import { fadeIn } from '@app/core/animations/route-animation';

@Component({
    selector: 'cv-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        fadeIn
        ]
})
export class EducationComponent {}
