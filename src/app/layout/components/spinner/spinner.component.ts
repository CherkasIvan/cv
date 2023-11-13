import { Observable } from 'rxjs';

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { SpinnerService } from '@core/services/spinner/spinner.service';

@Component({
    selector: 'cv-spinner',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent {
    @Input() public spinnerStyle!: string;
    public loading$: Observable<boolean> = this._spinnerService.loading$;

    constructor(private readonly _spinnerService: SpinnerService) {}
}
