import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'cv-projects-page',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {}
