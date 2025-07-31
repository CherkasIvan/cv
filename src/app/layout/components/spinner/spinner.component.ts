import { Observable, timeout } from 'rxjs';

import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { ISpinner } from '@layout/store/model/spinner.interface';
import { spinnerSelector } from '@layout/store/spinner-store/spinner.selectots';

import { LoadingInterceptor } from '@app/core/interceptors/loading.interceptor';

@Component({
    selector: 'cv-spinner',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoadingInterceptor,
            multi: true,
        },
    ],
})
export class SpinnerComponent {
    @Input() public spinnerStyle!: string;
    public loading$: Observable<boolean> = this._store.pipe(
        timeout(1500),
        select(spinnerSelector),
    );

    constructor(private _store: Store<ISpinner>) {}
}
