import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AuthService } from '@auth/services/auth.service';

@Component({
  selector: 'cv-logout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoutComponent {
  constructor(private readonly _authService: AuthService) {}

  public logout() {
    this._authService.signOut();
  }
}
