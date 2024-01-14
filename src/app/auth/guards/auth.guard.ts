import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';

import { ERouterPath } from '@utils/enum/router-path.enum';

import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard {
    constructor(
        public authService: AuthService,
        public router: Router,
    ) {}
    canActivate(): Observable<boolean> | Promise<boolean> | UrlTree | boolean {
        if (!this.authService.isAuth$.value) {
            this.router.navigate([ERouterPath.AUTH]);
            return false;
        }
        return true;
    }
}
