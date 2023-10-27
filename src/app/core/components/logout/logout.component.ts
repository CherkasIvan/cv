import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { AuthService } from '@auth/services/auth.service';

@Component({
  selector: 'cv-logout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.signOut();
  }
}
