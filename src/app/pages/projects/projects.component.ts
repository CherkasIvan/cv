import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ProjectsContentComponent } from './components/projects-content/projects-content.component';

@Component({
    selector: 'cv-projects-page',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [ProjectsContentComponent],
})
export class ProjectsComponent {}
