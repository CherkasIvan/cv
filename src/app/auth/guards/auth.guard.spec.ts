import { TestBed } from '@angular/core/testing';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';
import { AuthGuard } from './auth.guard';

describe('authGuard', (): boolean => {
    // const executeGuard: CanActivateFn = (...guardParameters) =>
    //     TestBed.runInInjectionContext(() => new AuthGuard(...guardParameters));

    // beforeEach(() => {
    //     TestBed.configureTestingModule({});
    // });

    // it('should be created', () => {
    //     expect(executeGuard).toBeTruthy();
    // });
    return true;
});
