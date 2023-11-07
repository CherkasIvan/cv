import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AuthService } from '@auth/services/auth.service';
import { LogoutDialogService } from '@core/services/logout-dialog/logout-dialog.service';

@Component({
    selector: 'cv-simple-button',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './simple-button.component.html',
    styleUrls: ['./simple-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleButtonComponent {
    @Input() public buttonName = '';

    constructor(
        private readonly _logoutDialogService: LogoutDialogService,
        private readonly _authService: AuthService,
    ) {}

    public openLogoutDialog() {
        this._logoutDialogService.openDialog();
    }

    public cancel() {
        this._logoutDialogService.closeDialog();
    }

    public confirmLogout() {
        this._authService.signOut();
    }
}
