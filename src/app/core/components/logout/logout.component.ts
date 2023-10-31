import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { LogoutDialogService } from '@core/services/logout-dialog/logout-dialog.service';

@Component({
    selector: 'cv-logout',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoutComponent {
    constructor(private readonly _logoutDialogService: LogoutDialogService) {}

    public logout() {
        this._logoutDialogService.openDialog();
    }
}
