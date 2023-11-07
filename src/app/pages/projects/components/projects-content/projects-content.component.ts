import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { GitHubService } from '@pages/projects/services/git-hub/git-hub.service';

import { IGitHub } from '../../models/github.interface';
import { ProjectStarsComponent } from '../project-stars/project-stars.component';

@Component({
    selector: 'cv-projects-content',
    templateUrl: './projects-content.component.html',
    styleUrls: ['./projects-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgFor, ProjectStarsComponent, AsyncPipe, TranslateModule],
})
export class ProjectsContentComponent {
    public projectsList$: Observable<IGitHub[]> = this._gitHubService.getUserRepos();

    constructor(private readonly _gitHubService: GitHubService) {}
}
