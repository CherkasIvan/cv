import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { AuthService } from '@auth/services/auth.service';

import { LogoutDialogService } from '@core/services/logout-dialog/logout-dialog.service';

import { ModalOutletComponent } from '../modal-outlet/modal-outlet.component';

@Component({
    selector: 'cv-simple-button',
    standalone: true,
    imports: [CommonModule, ModalOutletComponent],
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

    // public confirmLogout() {
    //     this._authService.signOut();
    // }
}
