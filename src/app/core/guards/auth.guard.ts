import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> | boolean {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/layout']);
      return true;
    }
    this.router.navigate(['/auth']);
    return false;
  }
}
