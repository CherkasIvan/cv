import { ChangeDetectionStrategy, Component } from '@angular/core';
import { fadeIn } from '@app/core/animations/route-animation';

@Component({
    selector: 'cv-projects-page',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        fadeIn
        ]
})
export class ProjectsComponent {}
