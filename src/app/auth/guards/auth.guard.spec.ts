import { TestBed } from '@angular/core/testing';
import { CanActivateFn, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthGuard as authGuard } from './auth.guard';

describe('authGuard', ():
  | Observable<boolean>
  | Promise<boolean>
  | UrlTree
  | boolean => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => new authGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
  return;
});
