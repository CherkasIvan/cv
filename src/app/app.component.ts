import { BehaviorSubject } from 'rxjs';

import { AsyncPipe } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { LoadingInterceptor } from './core/interceptors/loading.interceptor';
import { DarkModeService } from './core/services/dark-mode/dark-mode.service';
import { SpinnerComponent } from './layout/components/spinner/spinner.component';

@Component({
    selector: 'cv-root',
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [RouterOutlet, RouterModule, SpinnerComponent, AsyncPipe],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoadingInterceptor,
            multi: true,
        },
    ],
})
export class AppComponent {
    public currentTheme$: BehaviorSubject<boolean> =
        this._darkModeService.isDark$;

    constructor(private _darkModeService: DarkModeService) {}
}
