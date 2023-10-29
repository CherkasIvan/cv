import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AuthService } from '@auth/services/auth.service';

import { LogoutDialogService } from '@core/services/logout-dialog/logout-dialog.service';

@Component({
  selector: 'cv-logout-dialog',
  templateUrl: './logout-dialog.component.html',
  styleUrls: ['./logout-dialog.component.scss'],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoutDialogComponent {
  constructor(
    private readonly _logoutDialogService: LogoutDialogService,
    private readonly _authService: AuthService,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  public closeDialog() {
    this._logoutDialogService.closeDialog();
  }

  public logout() {
    this._authService.signOut();
    this._logoutDialogService.closeDialog();
  }
}
