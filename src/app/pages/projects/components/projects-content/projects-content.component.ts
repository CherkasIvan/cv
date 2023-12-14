import { TranslateModule } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { AsyncPipe, NgFor } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { LoadingInterceptor } from '@app/core/interceptors/loading.interceptor';
import { DarkModeService } from '@app/core/services/dark-mode/dark-mode.service';

import { SpinnerComponent } from '../../../../layout/components/spinner/spinner.component';
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
    imports: [
        NgFor,
        ProjectStarsComponent,
        AsyncPipe,
        TranslateModule,
        SpinnerComponent,
    ],
    providers: [
        // Подключаем интерцептор AuthInterceptor к HTTP-запросам
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoadingInterceptor,
            multi: true,
        },
    ],
})
export class ProjectsContentComponent implements OnInit {
    public projectsList$!: Observable<IGitHub[]>;
    public currentTheme$: BehaviorSubject<boolean> =
        this._darkModeService.isDark$;
    constructor(
        private _store$: Store<IGitHub>,
        private _darkModeService: DarkModeService,
    ) {}

    ngOnInit(): void {
        this.projectsList$ = this._store$.select(
            GithubReposSelectors.selectGithubRepos,
        );
        this._store$.dispatch(GithubReposActions.loadGithubRepos());
        this.projectsList$.subscribe;
    }
}
