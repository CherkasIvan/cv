import { Component } from '@angular/core';
import { GitHubService } from '@pages/projects/services/git-hub/git-hub.service';
import { IGitHub } from '../../models/github.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'cv-projects-content',
  templateUrl: './projects-content.component.html',
  styleUrls: ['./projects-content.component.scss']
})
export class ProjectsContentComponent {
  public projectsList$: Observable<IGitHub> = this.gitHubService.getUserRepos();

  constructor(private gitHubService: GitHubService) {}
}
