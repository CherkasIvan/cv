import { Observable } from 'rxjs';

import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { SpinnerService } from '@core/services/spinner/spinner.service';

import { LoadingInterceptor } from '@app/core/interceptors/loading.interceptor';

@Component({
    selector: 'cv-spinner',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        // Подключаем интерцептор AuthInterceptor к HTTP-запросам
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoadingInterceptor,
            multi: true,
        },
    ],
})
export class SpinnerComponent {
    @Input() public spinnerStyle!: string;
    public loading$: Observable<boolean> = this._spinnerService.loading$;

    constructor(private readonly _spinnerService: SpinnerService) {}
}
