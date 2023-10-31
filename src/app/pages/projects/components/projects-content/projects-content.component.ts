import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GitHubService } from '@pages/projects/services/git-hub/git-hub.service';
import { Observable } from 'rxjs';

import { IGitHub } from '../../models/github.interface';

@Component({
    selector: 'cv-projects-content',
    templateUrl: './projects-content.component.html',
    styleUrls: ['./projects-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsContentComponent {
    public projectsList$: Observable<IGitHub[]> =
        this._gitHubService.getUserRepos();

    constructor(private readonly _gitHubService: GitHubService) {}
}
