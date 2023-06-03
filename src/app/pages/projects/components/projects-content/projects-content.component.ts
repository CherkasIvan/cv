import { Component, OnInit } from '@angular/core';
import { GitHubService } from '@shared/services/git-hub/git-hub.service';

@Component({
	selector: 'cv-projects-content',
	templateUrl: './projects-content.component.html',
	styleUrls: ['./projects-content.component.scss'],
})
export class ProjectsContentComponent implements OnInit {
	public projectsList: any = [];
	constructor(private gitHubService: GitHubService) {}

	ngOnInit(): void {
		this.gitHubService.getUserRepos().subscribe((el) => {
			this.projectsList = el;
		});
	}
}
