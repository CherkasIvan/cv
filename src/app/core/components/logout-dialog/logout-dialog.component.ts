import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AuthService } from '@app/auth/services/auth.service';
import { LogoutDialogService } from '@app/core/services/logout-dialog/logout-dialog.service';

import { SimpleButtonComponent } from '../simple-button/simple-button.component';

@Component({
    selector: 'cv-logout-dialog',
    templateUrl: './logout-dialog.component.html',
    styleUrls: ['./logout-dialog.component.scss'],
    standalone: true,
    imports: [CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoutDialogComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: string,
        private readonly _logoutDialogService: LogoutDialogService,
        private readonly _authService: AuthService,
    ) {}

    public cancel() {
        this._logoutDialogService.closeDialog();
    }

    public confirmLogout() {
        this._authService.signOut();
        this._logoutDialogService.closeDialog();
    }
}
