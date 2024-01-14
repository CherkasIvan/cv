import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { IGitHub } from '../../models/github.interface';
import * as GithubReposActions from '../../projects-store/github.actions';
import * as GithubReposSelectors from '../../projects-store/github.selectors';
import { ProjectStarsComponent } from '../project-stars/project-stars.component';

@Component({
    selector: 'cv-projects-content',
    templateUrl: './projects-content.component.html',
    styleUrls: ['./projects-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgFor, ProjectStarsComponent, AsyncPipe, TranslateModule],
})
export class ProjectsContentComponent implements OnInit {
    public projectsList$!: Observable<IGitHub[]>;

    constructor(private _store$: Store<IGitHub>) {}

    ngOnInit(): void {
        this.projectsList$ = this._store$.select(
            GithubReposSelectors.selectGithubRepos,
        );
        this._store$.dispatch(GithubReposActions.loadGithubRepos());
        this.projectsList$.subscribe;
    }
}
