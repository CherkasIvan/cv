import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'cv-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EducationComponent {}
