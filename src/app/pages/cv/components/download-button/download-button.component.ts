import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { DarkModeService } from '@core/services/dark-mode/dark-mode.service';

@Component({
    selector: 'cv-download-button',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './download-button.component.html',
    styleUrls: ['./download-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DownloadButtonComponent {
    @Input() public downloadPath = '';
    @Input() public label = '';
    public currentTheme$ = this._darkModeService.isDark$;

    constructor(private readonly _darkModeService: DarkModeService) {}
}
