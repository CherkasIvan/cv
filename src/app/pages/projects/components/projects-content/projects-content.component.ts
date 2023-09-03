import { Component, OnDestroy, OnInit } from '@angular/core';
import { GitHubService } from '@pages/projects/services/git-hub/git-hub.service';
import { IGitHub } from '../../models/github.interface';
import { Subscription } from 'rxjs';
import { IGitHubRepos } from '../../models/github-repos.interface';

@Component({
  selector: 'cv-projects-content',
  templateUrl: './projects-content.component.html',
  styleUrls: ['./projects-content.component.scss'],
})
export class ProjectsContentComponent implements OnInit, OnDestroy {
  public projectsList: any = [];
  private gitHubSubscriber: Subscription = new Subscription();
  constructor(private gitHubService: GitHubService) {}

  ngOnInit(): void {
    this.gitHubSubscriber.add(
      this.gitHubService.getUserRepos().subscribe((el) => {
        this.projectsList = el;
      })
    );
  }
  ngOnDestroy() {
    this.gitHubSubscriber.unsubscribe();
  }
}
