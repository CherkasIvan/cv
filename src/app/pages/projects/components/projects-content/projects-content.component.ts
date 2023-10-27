import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { GitHubService } from '@pages/projects/services/git-hub/git-hub.service';

import { IGitHub } from '../../models/github.interface';

@Component({
  selector: 'cv-projects-content',
  templateUrl: './projects-content.component.html',
  styleUrls: ['./projects-content.component.scss']
})
export class ProjectsContentComponent {
  public projectsList$: Observable<IGitHub[]> =
    this.gitHubService.getUserRepos();

  constructor(private gitHubService: GitHubService) {}
}
